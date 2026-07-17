'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, FileText, Layout, Code2, Users, AlertCircle, RefreshCw } from 'lucide-react';

interface GraphNode {
  id: string;
  label: string;
  x: number;
  y: number;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
}

export function KnowledgeGraph() {
  const [activeNode, setActiveNode] = React.useState<string | null>(null);
  const [isUnified, setIsUnified] = React.useState(true);

  // Core center is (300, 200) for standard 600x400 SVG box
  const centerNode = {
    id: 'ssot',
    label: 'Engineering SSOT',
    x: 300,
    y: 200,
    icon: Database,
    description: 'The Unified Single Source of Truth consolidating all engineering knowledge.',
    color: '#E63946',
  };

  const peripheralNodes: GraphNode[] = [
    {
      id: 'req',
      label: 'Requirements',
      x: 120,
      y: 90,
      icon: FileText,
      description: 'PRDs, user stories, software requirements documents, and business specifications.',
      color: '#183153',
    },
    {
      id: 'arch',
      label: 'Architecture',
      x: 300,
      y: 60,
      icon: Layout,
      description: 'C4 diagrams, system boundaries, technology decisions, and service APIs.',
      color: '#183153',
    },
    {
      id: 'code',
      label: 'Source Code',
      x: 480,
      y: 90,
      icon: Code2,
      description: 'Implementation repository, types, abstractions, docstrings, and tests.',
      color: '#183153',
    },
    {
      id: 'doc',
      label: 'Documentation',
      x: 480,
      y: 310,
      icon: FileText,
      description: 'Readmes, internal wikis, manuals, and developer operations runbooks.',
      color: '#183153',
    },
    {
      id: 'tracker',
      label: 'Issue Trackers',
      x: 300,
      y: 340,
      icon: AlertCircle,
      description: 'Jira, Linear, GitHub issues containing bug reports and feature specs.',
      color: '#183153',
    },
    {
      id: 'human',
      label: 'Human Mind',
      x: 120,
      y: 310,
      icon: Users,
      description: 'Tribal developer knowledge, architectural intuition, and unwritten design context.',
      color: '#183153',
    },
  ];

  // Positions when "scattered" (fragmented state)
  const getScatteredCoords = (nodeId: string) => {
    switch (nodeId) {
      case 'req': return { x: 50, y: 70 };
      case 'arch': return { x: 450, y: 40 };
      case 'code': return { x: 550, y: 150 };
      case 'doc': return { x: 520, y: 350 };
      case 'tracker': return { x: 230, y: 360 };
      case 'human': return { x: 50, y: 280 };
      default: return { x: 100, y: 100 };
    }
  };

  const getPosition = (node: GraphNode) => {
    if (isUnified) {
      return { x: node.x, y: node.y };
    }
    const scattered = getScatteredCoords(node.id);
    return scattered;
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col md:flex-row gap-6 items-center">
      {/* Visual Canvas Block */}
      <div className="relative w-full aspect-[4/3] max-w-[550px] bg-white dark:bg-brand-dark-bg/60 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
        <svg
          viewBox="0 0 600 400"
          className="w-full h-full select-none"
        >
          {/* Animated connections */}
          {isUnified &&
            peripheralNodes.map((node) => (
              <g key={`link-${node.id}`}>
                {/* Static Link Line */}
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={centerNode.x}
                  y2={centerNode.y}
                  className="stroke-brand-primary/10 dark:stroke-brand-dark-muted/20"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                {/* Flowing particle link */}
                <motion.line
                  x1={node.x}
                  y1={node.y}
                  x2={centerNode.x}
                  y2={centerNode.y}
                  className="stroke-brand-accent/30 dark:stroke-brand-accent/40"
                  strokeWidth="2"
                  initial={{ strokeDasharray: '0 200', strokeDashoffset: 0 }}
                  animate={{
                    strokeDasharray: ['20 180', '20 180'],
                    strokeDashoffset: [0, -200],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'linear',
                  }}
                />
              </g>
            ))}

          {/* Render Connections when fragmented (show broken links or lack thereof) */}
          {!isUnified && (
            <text
              x="300"
              y="200"
              textAnchor="middle"
              className="fill-brand-accent/20 dark:fill-brand-accent/10 font-mono text-sm tracking-widest font-semibold animate-pulse"
            >
              KNOWLEDGE FRAGMENTED & DESYNCHRONIZED
            </text>
          )}

          {/* Central SSOT Node */}
          <AnimatePresence>
            {isUnified && (
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                onClick={() => setActiveNode(centerNode.id)}
                className="cursor-pointer"
              >
                {/* Glow ring */}
                <circle
                  cx={centerNode.x}
                  cy={centerNode.y}
                  r="45"
                  className="fill-brand-accent/5 dark:fill-brand-accent/10 stroke-brand-accent/30 dark:stroke-brand-accent/30"
                  strokeWidth="1.5"
                />
                <circle
                  cx={centerNode.x}
                  cy={centerNode.y}
                  r="35"
                  className="fill-brand-accent dark:fill-brand-accent stroke-white dark:stroke-brand-dark-bg"
                  strokeWidth="3"
                />
                <centerNode.icon className="w-6 h-6 text-white absolute" style={{ transform: `translate(${centerNode.x - 12}px, ${centerNode.y - 12}px)` }} />
                <foreignObject x={centerNode.x - 60} y={centerNode.y + 40} width="120" height="40">
                  <div className="text-center font-display font-semibold text-[10px] sm:text-xs text-brand-primary dark:text-white leading-tight">
                    {centerNode.label}
                  </div>
                </foreignObject>
              </motion.g>
            )}
          </AnimatePresence>

          {/* Peripheral Nodes */}
          {peripheralNodes.map((node) => {
            const pos = getPosition(node);
            const isActive = activeNode === node.id;
            return (
              <motion.g
                key={node.id}
                animate={{ x: pos.x, y: pos.y }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                onClick={() => setActiveNode(node.id)}
                className="cursor-pointer group"
              >
                <motion.circle
                  r="24"
                  className={`transition-colors duration-200 ${
                    isActive
                      ? 'fill-brand-accent stroke-white dark:stroke-brand-dark-bg'
                      : 'fill-white dark:fill-brand-dark-surface stroke-brand-primary/20 dark:stroke-brand-dark-surface/50 group-hover:stroke-brand-accent'
                  }`}
                  strokeWidth="2.5"
                  whileHover={{ scale: 1.1 }}
                />
                <foreignObject x="-12" y="-12" width="24" height="24">
                  <node.icon
                    className={`w-6 h-6 transition-colors duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-brand-primary dark:text-brand-dark-text group-hover:text-brand-accent'
                    }`}
                  />
                </foreignObject>
                <foreignObject x="-50" y="28" width="100" height="35">
                  <div
                    className={`text-center font-display text-[9px] sm:text-[10px] leading-tight transition-colors duration-200 ${
                      isActive
                        ? 'font-bold text-brand-accent'
                        : 'font-medium text-brand-primary/80 dark:text-brand-dark-text/75 group-hover:text-brand-accent'
                    }`}
                  >
                    {node.label}
                  </div>
                </foreignObject>
              </motion.g>
            );
          })}
        </svg>

        {/* Floating Switch Button inside Canvas */}
        <button
          onClick={() => setIsUnified(!isUnified)}
          className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-white dark:bg-brand-dark-surface text-brand-primary dark:text-brand-dark-text shadow-md border border-slate-200/50 dark:border-slate-800/40 hover:bg-slate-50 hover:text-brand-accent dark:hover:text-brand-accent cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isUnified ? 'animate-spin' : ''}`} />
          {isUnified ? 'Show Fragmented' : 'Show Unified'}
        </button>
      </div>

      {/* Details Side Panel */}
      <div className="flex-1 w-full flex flex-col justify-center min-h-[160px] md:min-h-auto">
        <h3 className="font-display font-bold text-lg text-brand-primary dark:text-white mb-2">
          {activeNode === 'ssot'
            ? centerNode.label
            : activeNode
            ? peripheralNodes.find((n) => n.id === activeNode)?.label
            : 'Interactive Graph Explorer'}
        </h3>
        <p className="text-sm text-brand-muted dark:text-brand-dark-muted mb-4 leading-relaxed">
          {activeNode === 'ssot'
            ? centerNode.description
            : activeNode
            ? peripheralNodes.find((n) => n.id === activeNode)?.description
            : 'Select any node in the knowledge diagram to understand how development artifacts contribute to the overall Engineering Knowledge Base.'}
        </p>

        {activeNode && (
          <button
            onClick={() => setActiveNode(null)}
            className="self-start text-xs font-semibold text-brand-accent hover:underline cursor-pointer"
          >
            Clear Selection
          </button>
        )}

        <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/40 flex items-center justify-between">
          <div className="text-[11px] font-mono text-brand-muted dark:text-brand-dark-muted">
            State: <span className={isUnified ? 'text-green-600 dark:text-green-400 font-bold' : 'text-brand-accent font-bold'}>{isUnified ? 'SSOT Unified' : 'Desynchronized'}</span>
          </div>
          <div className="text-[11px] font-mono text-brand-muted dark:text-brand-dark-muted">
            Click nodes to inspect
          </div>
        </div>
      </div>
    </div>
  );
}
