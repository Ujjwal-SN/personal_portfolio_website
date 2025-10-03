document.addEventListener('DOMContentLoaded', function() {
    // Generate SVG patterns for project images
    generateProjectImages();
    
    // Add floating elements to project image containers
    addFloatingElements();
});

function generateProjectImages() {
    const projectImageContainers = document.querySelectorAll('.project-image-container');
    
    const projectImages = [
        'images/ecommerce.jpg',
        'images/weather.jpg',
        'images/task.jpg'
    ];
    const projectAlts = [
        'E-Commerce Website',
        'Weather Dashboard',
        'Task Management App'
    ];
    projectImageContainers.forEach((container, index) => {
        const img = document.createElement('img');
        img.src = projectImages[index % projectImages.length];
        img.alt = projectAlts[index % projectAlts.length];
        img.style.width = '100%';
        img.style.height = '180px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '12px 12px 0 0';
        img.loading = 'lazy';
        container.innerHTML = '';
        container.appendChild(img);
    });
}

function createGeometricPattern(svg, color1, color2) {
    // Create a linear gradient
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'gradient1');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', color1);
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', color2);
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);
    
    // Create background rectangle
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('fill', 'url(#gradient1)');
    svg.appendChild(rect);
    
    // Add geometric shapes
    for (let i = 0; i < 15; i++) {
        const shape = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const points = generateRandomPolygonPoints();
        shape.setAttribute('points', points);
        shape.setAttribute('fill', 'rgba(255, 255, 255, 0.2)');
        svg.appendChild(shape);
    }
}

function createWavePattern(svg, color1, color2) {
    // Create a linear gradient
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'gradient2');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '0%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', color1);
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', color2);
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);
    
    // Create background rectangle
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('fill', 'url(#gradient2)');
    svg.appendChild(rect);
    
    // Add wave paths
    for (let i = 0; i < 5; i++) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = generateWavePath(i * 40);
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
        path.setAttribute('stroke-width', '2');
        svg.appendChild(path);
    }
}

function createGridPattern(svg, color1, color2) {
    // Create a radial gradient
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    gradient.setAttribute('id', 'gradient3');
    gradient.setAttribute('cx', '50%');
    gradient.setAttribute('cy', '50%');
    gradient.setAttribute('r', '70%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', color1);
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', color2);
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);
    
    // Create background rectangle
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('fill', 'url(#gradient3)');
    svg.appendChild(rect);
    
    // Create grid lines
    const gridSize = 20;
    const width = 600;
    const height = 400;
    
    // Vertical lines
    for (let x = 0; x <= width; x += gridSize) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x);
        line.setAttribute('y1', 0);
        line.setAttribute('x2', x);
        line.setAttribute('y2', height);
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
    }
    
    // Horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', 0);
        line.setAttribute('y1', y);
        line.setAttribute('x2', width);
        line.setAttribute('y2', y);
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
    }
    
    // Add some circles for decoration
    for (let i = 0; i < 5; i++) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', Math.random() * width);
        circle.setAttribute('cy', Math.random() * height);
        circle.setAttribute('r', 10 + Math.random() * 30);
        circle.setAttribute('fill', 'rgba(255, 255, 255, 0.1)');
        svg.appendChild(circle);
    }
}

function generateRandomPolygonPoints() {
    const points = [];
    const numPoints = 3 + Math.floor(Math.random() * 4); // 3 to 6 points
    const centerX = Math.random() * 600;
    const centerY = Math.random() * 400;
    const radius = 20 + Math.random() * 40;
    
    for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        points.push(`${x},${y}`);
    }
    
    return points.join(' ');
}

function generateWavePath(yOffset) {
    const width = 600;
    const amplitude = 20;
    const frequency = 0.02;
    let path = `M 0 ${yOffset}`;
    
    for (let x = 0; x <= width; x += 10) {
        const y = yOffset + Math.sin(x * frequency) * amplitude;
        path += ` L ${x} ${y}`;
    }
    
    return path;
}

function addFloatingElements() {
    const projectImageContainers = document.querySelectorAll('.project-image-container');
    
    projectImageContainers.forEach(container => {
        // Add 3 floating elements to each container
        for (let i = 0; i < 3; i++) {
            const floatingEl = document.createElement('div');
            floatingEl.classList.add('floating-element');
            container.appendChild(floatingEl);
        }
    });
}