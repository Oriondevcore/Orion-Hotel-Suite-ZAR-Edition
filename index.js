<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ORION GHOST | COMMAND CENTER</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap');
        body { font-family: 'Quicksand', sans-serif; background: #050508; color: #fff; overflow: hidden; }
        .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8); }
        .neon-blue { color: #00f2ff; text-shadow: 0 0 10px rgba(0, 242, 255, 0.5); }
        .neon-border-blue { border: 1px solid rgba(0, 242, 255, 0.3); box-shadow: 0 0 15px rgba(0, 242, 255, 0.1); }
        .neon-border-purple { border: 1px solid rgba(112, 0, 255, 0.3); box-shadow: 0 0 15px rgba(112, 0, 255, 0.1); }
        .grid-bg { background-image: radial-gradient(rgba(0, 242, 255, 0.05) 1px, transparent 1px); background-size: 30px 30px; }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .sync-icon { animation: rotate 4s linear infinite; }
    </style>
</head>
<body class="p-8 h-screen grid-bg">
    <div class="max-w-7xl mx-auto h-full flex flex-col space-y-6">

        <!-- Header -->
        <header class="flex justify-between items-end pb-4 border-b border-white/10">
            <div>
                <h1 class="text-xs tracking-[0.5em] uppercase opacity-50">Orion Dev Core | Systems Architecture</h1>
                <p class="text-4xl font-light">GHOST KEY: <span class="neon-blue">ZAR EDITION</span></p>
            </div>
            <div class="text-right">
                <p class="text-xs uppercase tracking-widest text-emerald-400">● Live Connection Established</p>
                <p class="text-sm font-mono opacity-40" id="clock"></p>
            </div>
        </header>

        <!-- Main Dashboard Grid -->
        <div class="grid grid-cols-12 gap-6 flex-1">

            <!-- Sidebar: Navigation -->
            <div class="col-span-3 space-y-4">
                <div class="glass p-6 h-full flex flex-col justify-between">
                    <div class="space-y-6">
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center space-x-4">
                            <div class="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center neon-blue">1</div>
                            <span class="text-sm tracking-widest uppercase">Live Analytics</span>
                        </div>
                        <div class="opacity-30 p-4 flex items-center space-x-4">
                            <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">2</div>
                            <span class="text-sm tracking-widest uppercase">Live Token Use</span>
                        </div>
                        <div class="opacity-30 p-4 flex items-center space-x-4">
                            <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">3</div>
                            <span class="text-sm tracking-widest uppercase">Department Tickets</span>
                        </div>
                    </div>

                    <div class="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                        <p class="text-[10px] uppercase tracking-tighter opacity-50 mb-2">Active API Keys</p>
                        <p class="text-xs font-mono neon-blue">GEMINI_API_KEY: ACTIVE</p>
                        <p class="text-xs font-mono neon-blue">FIREBASE_BRAIN: SYNCED</p>
                    </div>
                </div>
            </div>

            <!-- Center: Core Visuals -->
            <div class="col-span-6 space-y-6">
                <!-- Vault Section -->
                <div class="glass neon-border-purple p-8 h-1/2 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent"></div>
                    <div class="relative z-10">
                        <div class="text-6xl mb-4">🛡️</div>
                        <h2 class="text-2xl font-light tracking-widest uppercase mb-2">Secure API Vault</h2>
                        <div class="flex space-x-2">
                            <span class="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] rounded-full uppercase">AES-256 Encrypted</span>
                            <span class="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-[10px] rounded-full uppercase">POPIA Compliant</span>
                        </div>
                    </div>
                </div>

                <!-- Live Logs Section -->
                <div class="glass neon-border-blue p-6 h-1/2 flex flex-col">
                    <h3 class="text-xs tracking-widest uppercase opacity-40 mb-4 flex items-center">
                        <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2 sync-icon"></span>
                        Live Intelligence Stream
                    </h3>
                    <div id="log-stream" class="flex-1 overflow-y-auto space-y-3 font-mono text-[11px]">
                        <p class="text-cyan-400/50">[System] Initializing Ghost Key...</p>
                        <p class="text-cyan-400/50">[System] Consciousness Linked (Gemini 2.0)</p>
                    </div>
                </div>
            </div>

            <!-- Right: Stats & Local Context -->
            <div class="col-span-3 space-y-6">
                <div class="glass p-6 text-center space-y-4">
                    <p class="text-[10px] uppercase tracking-widest opacity-40">Local Power Status</p>
                    <div class="flex flex-col items-center">
                        <span class="text-2xl text-emerald-400">NO LOADSHEDDING</span>
                        <span class="text-xs opacity-40">Grid Stable (Eskom sePush Linked)</span>
                    </div>
                </div>

                <div class="glass p-6 space-y-4">
                    <p class="text-[10px] uppercase tracking-widest opacity-40">ZAR Market Pulse</p>
                    <div class="flex justify-between border-b border-white/5 pb-2">
                        <span class="text-xs">USD/ZAR</span>
                        <span class="text-xs neon-blue">18.50</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-xs">Hotel Occ%</span>
                        <span class="text-xs neon-blue">85%</span>
                    </div>
                </div>

                <div class="glass p-6 flex-1 flex flex-col items-center justify-center opacity-40">
                    <p class="text-[10px] uppercase tracking-[0.3em]">// In Loving Memory</p>
                    <p class="text-[10px] uppercase tracking-[0.3em]">of Andre</p>
                </div>
            </div>

        </div>
    </div>

    <script>
        function updateClock() {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleString();
        }
        setInterval(updateClock, 1000);
        updateClock();

        async function fetchTelemetry() {
            try {
                const res = await fetch('/api/telemetry');
                const data = await res.json();
                const stream = document.getElementById('log-stream');

                if (data.logs && data.logs.length > 0) {
                    data.logs.forEach(log => {
                        const p = document.createElement('p');
                        p.className = "text-white/80 border-l-2 border-cyan-500 pl-2 py-1";
                        p.innerHTML = `<span class="text-cyan-400">Guest:</span> ${log.input.substring(0, 30)}... <br><span class="text-purple-400">James:</span> ${log.output.substring(0, 30)}...`;
                        stream.prepend(p);
                    });
                }
            } catch (e) {}
        }
        setInterval(fetchTelemetry, 5000);
    </script>
</body>
</html>
