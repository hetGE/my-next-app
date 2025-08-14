#!/bin/bash

# Script to build for GitHub Pages (static export)
# Temporarily moves API routes since they're not compatible with static export

echo "Building for GitHub Pages..."

# Move API routes temporarily
if [ -d "app/api" ]; then
    echo "Moving API routes temporarily..."
    mv app/api app/api.tmp
fi

# Build with GitHub Pages environment
GITHUB_PAGES=true npm run build

# Check if build was successful
BUILD_EXIT_CODE=$?

# Restore API routes
if [ -d "app/api.tmp" ]; then
    echo "Restoring API routes..."
    mv app/api.tmp app/api
fi

# Exit with the same code as the build
exit $BUILD_EXIT_CODE