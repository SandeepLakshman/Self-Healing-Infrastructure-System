const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const imgPath = path.join(rootDir, 'docs', 'images', 'cicd-pipeline.png');
const imgBase64 = fs.readFileSync(imgPath).toString('base64');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ShopSphere — Self-Healing E-Commerce Platform & Cloud-Native Infrastructure</title>
  <style>
    :root {
      --bg: #0d1117;
      --card-bg: #161b22;
      --border: #30363d;
      --text: #c9d1d9;
      --text-heading: #f0f6fc;
      --accent: #58a6ff;
      --code-bg: #0d1117;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 40px 20px;
    }
    .container {
      max-width: 980px;
      margin: 0 auto;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 48px;
      box-shadow: 0 16px 36px rgba(0,0,0,0.4);
    }
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--border);
    }
    .print-btn {
      background: #238636;
      color: #fff;
      border: none;
      padding: 10px 18px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .print-btn:hover { background: #2ea043; }
    h1 { color: var(--text-heading); font-size: 2rem; margin-bottom: 16px; }
    h2 { color: var(--text-heading); font-size: 1.4rem; margin-top: 36px; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid var(--border); }
    h3 { color: var(--text-heading); font-size: 1.15rem; margin-top: 24px; margin-bottom: 12px; }
    p { margin-bottom: 16px; }
    .badge-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
    .badge {
      display: inline-block;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: 700;
      border-radius: 4px;
      color: #fff;
    }
    .badge-docker { background: #2496ED; }
    .badge-k8s { background: #326CE5; }
    .badge-node { background: #339933; }
    .badge-react { background: #61DAFB; color: #000; }
    .badge-tailwind { background: #38B2AC; }
    hr { border: 0; height: 1px; background: var(--border); margin: 32px 0; }
    ul, ol { margin-left: 24px; margin-bottom: 16px; }
    li { margin-bottom: 6px; }
    pre {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      overflow-x: auto;
      margin-bottom: 20px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.9rem;
      color: #e6edf3;
    }
    code {
      background: rgba(110,118,129,0.2);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.88em;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }
    pre code { background: none; padding: 0; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    th, td { border: 1px solid var(--border); padding: 10px 14px; text-align: left; }
    th { background: #1f242c; color: var(--text-heading); }
    tr:nth-child(even) { background: rgba(255,255,255,0.02); }
    .diagram-img {
      width: 100%;
      border-radius: 8px;
      border: 1px solid var(--border);
      margin: 16px 0 24px 0;
      display: block;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header-bar">
      <span style="color:#8b949e; font-size: 14px; font-weight:500;">📦 Downloadable Documentation & README</span>
      <button class="print-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
    </div>

    <h1>ShopSphere — Self-Healing E-Commerce Platform & Cloud-Native Infrastructure</h1>

    <div class="badge-row">
      <span class="badge badge-docker">Docker Multi-Stage</span>
      <span class="badge badge-k8s">Kubernetes Minikube (2 Frontend + 3 Backend Replicas)</span>
      <span class="badge badge-node">Node.js 20 LTS Express</span>
      <span class="badge badge-react">React 18 + Vite 5</span>
      <span class="badge badge-tailwind">Tailwind CSS 3</span>
    </div>

    <p><strong>ShopSphere</strong> is a high-availability, production-style e-commerce web application engineered with a modern monochrome glassmorphism frontend (2 replicas), an Express REST API backend, Docker multi-stage containerization, a 3-replica <strong>Kubernetes self-healing infrastructure</strong> with automated health probes, and an automated <strong>GitHub Actions CI/CD pipeline</strong>.</p>

    <hr/>

    <h2>🎯 Project Overview & Objectives</h2>
    <p>In production environments, infrastructure failures (crashed pods, memory spikes, unexpected process exits) must be isolated and resolved automatically without downtime or degraded end-user experience.</p>
    <ol>
      <li><strong>Realistic Commercial Experience</strong>: Monochrome luxury storefront with frosted glassmorphism, multi-category catalog (33 items), instant search, price slider filter, persistent cart state, and simulated checkout.</li>
      <li><strong>Autonomous Self-Healing</strong>: 3 backend replicas behind a Kubernetes ClusterIP load balancer with automated <code>livenessProbe</code> and <code>readinessProbe</code> monitoring on <code>/api/health</code>.</li>
      <li><strong>Container-Native Architecture</strong>: Decoupled frontend (Nginx reverse-proxy) and backend Docker containers with explicit resource requests and limits.</li>
      <li><strong>CI/CD Quality Gate</strong>: Automated GitHub Actions pipeline validating frontend builds, backend health checks, and container image generation on every push.</li>
    </ol>

    <h2>🏛️ System Architecture</h2>
<pre>
[ Client Browser ]
        │
        │  kubectl port-forward svc/frontend 8080:80
        │  (host port 8080 → pod port 80, local dev access)
        ▼
┌─────────────────────────────────────────────────────────────────┐
│ Kubernetes Node / Minikube                                      │
│                                                                 │
│  [ Service: frontend ]                                          │
│    NodePort 30080 → pod port 80 (direct node access)           │
│    Port-forward: 8080 → pod port 80 (dev access)               │
│             │                               │                   │
│             ▼                               ▼                   │
│  ┌─────────────────────────┐   ┌─────────────────────────┐      │
│  │ Pod: frontend-replica-1 │   │ Pod: frontend-replica-2 │      │
│  │ (Nginx: React SPA)      │   │ (Nginx: React SPA)      │      │
│  └──────────┬──────────────┘   └────────────┬────────────┘      │
│             │                               │                   │
│             └───────────────┬───────────────┘                   │
│                             │ /api/ reverse proxy               │
│                             ▼                                   │
│              [ Service: backend (ClusterIP :5000) ]             │
│                (Round-robin load balancing)                     │
│                  ┌──────────┼──────────┐                        │
│                  │          │          │                        │
│                  ▼          ▼          ▼                        │
│             ┌─────────┐┌─────────┐┌─────────┐                   │
│             │ Replica ││ Replica ││ Replica │                   │
│             │ Pod 1   ││ Pod 2   ││ Pod 3   │                   │
│             │ (:5000) ││ (:5000) ││ (:5000) │                   │
│             └─────────┘└─────────┘└─────────┘                   │
│                  ▲          ▲          ▲                        │
│                  └──────────┴──────────┘                        │
│                Automated Liveness/Readiness                     │
│                HTTP GET /api/health Probes                      │
└─────────────────────────────────────────────────────────────────┘
</pre>

    <h2>🚀 CI/CD Pipeline (GitHub Actions)</h2>
    <p>An automated continuous integration workflow is configured at <code>.github/workflows/ci.yml</code>. It validates every commit and pull request on Ubuntu runners without requiring paid cloud infrastructure or secrets.</p>

    <!-- Embedded High-Resolution Base64 Image -->
    <img class="diagram-img" src="data:image/png;base64,${imgBase64}" alt="ShopSphere CI/CD Workflow" />

    <h3>Pipeline Stages</h3>
    <ol>
      <li><strong>Frontend Job</strong>: Installs dependencies with npm caching, compiles production assets via Vite (<code>npm run build</code>).</li>
      <li><strong>Backend Job</strong>: Installs dependencies, runs syntax integrity and API route health checks (<code>npm test</code>).</li>
      <li><strong>Docker Build Job</strong>: Builds production <code>shopsphere-backend:1.0.0</code> and <code>shopsphere-frontend:1.0.0</code> container images upon successful CI checks.</li>
    </ol>

    <h2>☸️ Kubernetes Deployment (Minikube)</h2>
<pre>
# 1. Start Minikube & load images
minikube start --driver=docker
minikube image load shopsphere-backend:1.0.0
minikube image load shopsphere-frontend:1.0.0

# 2. Deploy manifests
kubectl apply -f k8s/

# 3. Verify pods & services
kubectl get pods -o wide
kubectl get svc
</pre>

    <h2>🔄 Self-Healing Demonstration</h2>
    <p>Test the cluster resilience by terminating a pod:</p>
<pre>
# Step 1: Watch pods in terminal 1
kubectl get pods -l app=shopsphere-backend -w

# Step 2: In terminal 2, delete one backend pod
kubectl delete pod &lt;backend-pod-name&gt;

# Step 3: Observe zero downtime on http://localhost:8080/api/health
# ReplicaSet controller instantly launches a new healthy replacement replica!
</pre>

    <h2>⚡ Essential Commands Cheatsheet</h2>
    <table>
      <thead>
        <tr><th>Task</th><th>Command</th></tr>
      </thead>
      <tbody>
        <tr><td>Start Docker Compose</td><td><code>docker compose up -d --build</code></td></tr>
        <tr><td>Check Docker Status</td><td><code>docker compose ps</code></td></tr>
        <tr><td>Start Minikube</td><td><code>minikube start --driver=docker</code></td></tr>
        <tr><td>Apply K8s Manifests</td><td><code>kubectl apply -f k8s/</code></td></tr>
        <tr><td>List Pods &amp; IPs</td><td><code>kubectl get pods -o wide</code></td></tr>
        <tr><td>Port Forward Storefront</td><td><code>kubectl port-forward svc/frontend 8080:80</code></td></tr>
        <tr><td>Simulate Pod Failure</td><td><code>kubectl delete pod &lt;backend-pod-name&gt;</code></td></tr>
      </tbody>
    </table>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(rootDir, 'README.html'), htmlContent, 'utf8');
console.log('Successfully generated README.html at ' + path.join(rootDir, 'README.html'));
