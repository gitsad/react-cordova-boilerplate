/**
 * Created by gitsad on 12.06.17.
 */
import React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
// Monitors are individually adjustable with props.
// Consult their repositories to learn about those props.
// Here, we put LogMonitor inside a DockMonitor.
// Note: DockMonitor is visible by default.
export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);
