import React from "react";

export function getDisplayName<P>(
  WrappedComponent: React.ComponentType<P>
): string {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
