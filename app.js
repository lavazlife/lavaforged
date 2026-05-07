const STORAGE_KEY = 'LavaForged_v10';

const libraryDatabase = [
    { cat: 'lld', title: 'LLD Liquid Chrome Identity', prompt: 'Generate an ultra-real 1:1 logo for LLD. Bold typography emerging from a pool of liquid chrome. Transparent background, sharp 3D depth, studio lighting.' },
    { cat: 'lld', title: 'Lavaz Molten Core UI', prompt: 'UI/UX design concept for a mobile workspace. Obsidian black background, glowing neon red and orange lava accents. Sleek, tactile steel buttons.' },
    { cat: 'lld', title: 'Neo-Noir Cyberpunk Crest', prompt: 'A futuristic vector pro crest for Lavaz Life Designs. Neon pink and cyan outlines, deep black background, circuitry patterns integrating into the letters LLD.' },
    { cat: 'lld', title: 'Premium Glass Card Layout', prompt: 'UI component design: A frosted glassmorphism card hovering over a pulsating red lava background. Premium materials, high contrast, volumetric lighting.' },
    { cat: 'lld', title: 'LLD Carbon Fiber Branding', prompt: 'Macro 105mm shot of the LLD logo embossed onto a high-contrast carbon fiber texture. 1:1 ratio, 8K fidelity, photorealistic depth of field.' },
    { cat: 'lld', title: 'Holographic Workspace App', prompt: 'Concept art for a digital workspace interface. Sci-Fi holographic overlays, glowing cyan text, dark void background, tactile 3D floating panels.' },
    { cat: 'lld', title: 'Minimal Modern Monogram', prompt: 'Minimalist LLD monogram. Matte black finish on a completely transparent background. Subtle gold rim lighting emphasizing 3D depth.' },
    { cat: 'lld', title: 'Obsidian & Gold App Icon', prompt: 'Mobile app icon design. A perfectly smooth obsidian cube with the LLD letters carved into it, glowing with molten gold. 1:1 aspect ratio.' },
    { cat: 'lld', title: 'Industrial Steel Logo', prompt: 'The LLD logo forged from heavy, rusted industrial steel. High contrast, gritty texture, sparks flying in the background. Cinematic lighting.' },
    { cat: 'lld', title: 'Lava Flow Data Visualization', prompt: 'UI dashboard element. A data graph where the lines are glowing streams of lava on an obsidian grid. Clean, functional, striking.' },
    { cat: 'lld', title: 'LLD Neon Signage', prompt: 'Photorealistic render of a neon sign spelling "LLD". Placed on a wet brick wall, reflecting onto puddles below. Neo-Noir, rain, 8K detail.' },
    { cat: 'lld', title: 'Tactile Interface Elements', prompt: 'Macro shot of mechanical keyboard keys designed for a Lavaz Life workstation. Brushed aluminum, glowing red legends, ray-tracing feel.' },
    { cat: 'lld', title: 'Geometric Glass Logo', prompt: 'LLD logo constructed from overlapping geometric panes of tinted glass. Studio 3-Point Light, sharp reflections, transparent background.' },
    { cat: 'lld', title: 'Cybernetic HUD Dashboard', prompt: 'First-person view of a high-tech HUD. Concentric glowing orange circles, data streams, targeting reticles. Sci-fi aesthetic, 16:9 ratio.' },
    { cat: 'lld', title: 'Molten Typography', prompt: 'The letters LLD rendered as thick, slowly dripping molten rock. Volumetric lighting highlighting the heat. Deep black backdrop.' },
    { cat: 'lld', title: 'Lava Workspace OS Frame', prompt: 'Render a sleek tablet running a dark-mode OS. Obsidian bezels, molten orange UI elements, high-tech luxury feel, cinematic depth of field.' },
    { cat: 'lld', title: 'LLD Holographic Sticker', prompt: '1:1 ratio. A physical holographic sticker of the LLD logo peeling off a matte black surface. Rainbow iridescence, tactile depth, high fidelity.' },
    { cat: 'lld', title: 'Cyberpunk Server Stack', prompt: 'Macro photography of a server rack. Glowing red LED indicators, heavy black steel, braided cables. Lavaz Life industrial aesthetic.' },
    { cat: 'lld', title: 'Liquid Lava Background', prompt: '16:9 ratio. Abstract background texture. Slow moving, highly detailed liquid magma. High contrast between bright orange heat and dark cooling rock.' },
    { cat: 'lld', title: 'LLD Titanium Engraving', prompt: 'Extreme close up of the letters L, L, D precision laser engraved into a block of raw titanium. Sparks actively flying from the laser point. 8K look.' },
    { cat: 'lld', title: 'Neon Red Tunnel', prompt: 'Symmetrical perspective looking down an infinite corridor of obsidian panels lined with pulsing neon red strips. Volumetric fog in the distance.' },
    { cat: 'lld', title: 'Apparel Mockup: LLD Hoodie', prompt: 'Studio 3-Point Light. A premium black heavyweight hoodie floating in a void. The LLD logo embroidered in metallic gold thread on the chest. High contrast.' },
    { cat: 'lld', title: 'Glassmorphism Login Screen', prompt: 'UI Concept. A floating frosted glass panel over a dark cybernetic background. Biometric fingerprint scanner glowing cyan.' },
    { cat: 'lld', title: 'Molten Core Battery', prompt: 'A futuristic glass battery cell containing a swirling mass of orange energy. Placed on a brushed steel table. Cinematic lighting, 16:9.' },
    { cat: 'lld', title: 'LLD Neon Watermark', prompt: '1:1 transparent background. A thin, elegant neon orange outline of the LLD monogram. Designed to overlay on dark cinematic footage.' },
    { cat: 'cinematic', title: 'ArchViz Global Illumination', prompt: 'Fidelity: 8K look. Lighting: Global illumination, Golden Hour. Composition: A hyper-modern concrete and glass house nestled in dense autumn woods. 16:9 aspect ratio.' },
    { cat: 'cinematic', title: 'Red Stag Restaurant Interior', prompt: 'Fidelity: Photoreal. Lighting: Low-light, warm amber ambiance. Scene: A premium dining lounge with deep leather booths, a massive stone fireplace, and rustic antler chandeliers. Depth of field.' },
    { cat: 'cinematic', title: 'Blue Hour Mountain Ridge', prompt: 'Fidelity: Cinematic 8K. Lighting: Blue Hour Clarity. Scene: Fog rolling over the Blue Ridge mountains at twilight. Deep blue shadows, highly detailed forest canopy.' },
    { cat: 'cinematic', title: 'Macro 105mm Watch Dial', prompt: 'Fidelity: Ultra-Real. Lighting: Studio 3-Point Light. Scene: Extreme close-up of a luxury mechanical watch dial. Intricate gears, brushed metal textures, high contrast.' },
    { cat: 'cinematic', title: 'Matterhorn Lounge Ambient', prompt: 'Fidelity: 8K look. Scene: A dimly lit, upscale alpine-themed lounge. Volumetric smoke, neon accents reflecting off polished mahogany tables. Ray-tracing feel.' },
    { cat: 'cinematic', title: 'Sci-Fi Holographic Server Room', prompt: 'Fidelity: Cinematic. Lighting: Cool blue and harsh magenta. Scene: Infinite rows of glass server racks emitting holographic data streams. High contrast, depth of field.' },
    { cat: 'cinematic', title: 'Golden Hour Lumber Mill', prompt: 'Fidelity: Photoreal. Lighting: Golden Hour Magic. Scene: An old, weathered lumber yard bathed in warm evening sunlight. Highly detailed wood grain textures, floating dust motes.' },
    { cat: 'cinematic', title: 'Anime RealMix City Rain', prompt: 'Fidelity: 8K Anime RealMix. Scene: A bustling street market in the rain. Neon signs reflecting on wet pavement, stylized but hyper-detailed textures. 16:9.' },
    { cat: 'cinematic', title: 'Photoreal Product Hero Shot', prompt: 'Fidelity: 8K look. Lighting: Retail Hero Shot. Scene: A sleek, chrome espresso machine on a black marble countertop. Premium materials, flawless reflections.' },
    { cat: 'cinematic', title: 'Fantasy Epic Fortress', prompt: 'Fidelity: Cinematic. Lighting: Volumetric god rays. Scene: A massive stone fortress carved into the side of a sheer cliff. Epic scale, highly detailed masonry.' },
    { cat: 'cinematic', title: 'Neo-Noir Highway', prompt: 'Fidelity: 8K look. Lighting: Blue Hour. Scene: An empty, rain-slicked highway stretching into the mountains. Taillights streaking in the distance. Cinematic composition.' },
    { cat: 'cinematic', title: 'Tactile Leather Armchair', prompt: 'Fidelity: Macro 105mm. Lighting: Studio. Scene: Close-up of worn, high-quality brown leather on a vintage armchair. High-contrast, emphasizing the tactile material.' },
    { cat: 'cinematic', title: 'Volumetric Forest Path', prompt: 'Fidelity: Ultra-Real Nature. Lighting: Volumetric god rays cutting through morning mist. Scene: A quiet dirt path winding through ancient pine trees. 16:9 ratio.' },
    { cat: 'cinematic', title: 'Cyberpunk Staffing Office', prompt: 'Fidelity: Neo-Noir. Scene: A gritty, neon-lit employment agency storefront in a dystopian city. Rain streaming down the glass, holographic "Help Wanted" signs.' },
    { cat: 'cinematic', title: 'Stylized Flat Vector Horizon', prompt: 'Fidelity: Stylized Pro. Scene: A clean, minimalist flat vector landscape of rolling hills and a massive glowing sun. High contrast, perfectly smooth gradients.' },
    { cat: 'cinematic', title: 'Cinematic Drone Shot', prompt: 'Fidelity: 8K look. Lighting: Golden Hour. Scene: High-altitude drone shot looking straight down at a winding river cutting through dense autumn forests.' },
    { cat: 'cinematic', title: 'Studio Glass Prisms', prompt: 'Fidelity: Ray-tracing feel. Lighting: Complex studio lighting. Scene: Multiple geometric glass prisms refracting intense beams of colorful light. Transparent background.' },
    { cat: 'cinematic', title: 'Moose Lodge Exterior', prompt: 'Fidelity: Cinematic. Lighting: Blue Hour Clarity. Scene: A rustic, sprawling log cabin lodge set against a backdrop of dark, looming mountains at dusk. Warm light spilling from the windows.' },
    { cat: 'cinematic', title: 'Ultra-Real Desert Canyon', prompt: 'Fidelity: 8K look. Lighting: Harsh midday sun. Scene: Deep, red rock desert canyon. Highly detailed sandstone textures, stark black shadows.' },
    { cat: 'cinematic', title: 'Macro Raindrop on Leaf', prompt: 'Fidelity: Macro 105mm. Lighting: Natural soft light. Scene: A single, perfectly spherical raindrop resting on a vibrant green leaf. Photorealistic reflections inside the drop.' },
    { cat: 'cinematic', title: 'Ray-Traced Concept Car', prompt: 'Fidelity: 8K look. Lighting: Studio 3-Point Light. Composition: Sleek, matte black concept car with orange underglow in a vast, empty concrete studio.' },
    { cat: 'cinematic', title: 'Volumetric Library', prompt: 'Fidelity: Cinematic. Lighting: Heavy volumetric dust beams pouring through massive gothic windows. Scene: An ancient, towering library with rows of leather-bound books.' },
    { cat: 'cinematic', title: 'Macro Turntable Stylus', prompt: 'Fidelity: Macro 105mm. Scene: Extreme close up of a diamond stylus tracking the grooves of a vinyl record. High contrast, tactile materials.' },
    { cat: 'cinematic', title: 'Neo-Noir Rooftop', prompt: 'Fidelity: 8K. Lighting: Cyberpunk Neon. Scene: Looking down over a futuristic city from a rain-slicked glass balcony. Vivid magenta and cyan reflections.' },
    { cat: 'cinematic', title: 'Photoreal Plated Dish', prompt: 'Fidelity: Ultra-Real. Lighting: Retail Hero Shot. Scene: A high-end culinary dish perfectly plated on dark slate. Steam rising, sharp focus on the textures of the food.' },
    { cat: 'horror', title: 'The Wytheville Signal', prompt: 'Act as the creative director. Draft a podcast script intro detailing a mysterious, repeating numbers station broadcast picked up by local radios in Wytheville during the late 90s. Build intense paranoia.' },
    { cat: 'horror', title: 'Found Footage: The Asylum', prompt: 'Generate a VHS-style cinematic still. Grainy, tracking lines. A flashlight beam illuminating the rusted gates of the abandoned Middletown asylum at midnight. 16:9 ratio.' },
    { cat: 'horror', title: 'Shadows of Chilhowie', prompt: 'Fidelity: Cinematic found-footage. Scene: Dense, unnatural fog rolling through a small valley town. A tall, distorted silhouette stands motionless under a flickering streetlamp.' },
    { cat: 'horror', title: 'The Lumberyard Entity', prompt: 'Fidelity: Neo-Noir horror. Scene: Inside an abandoned Rowley lumber warehouse. High-contrast shadows. Glowing, malevolent eyes staring from atop a massive stack of rotting timber.' },
    { cat: 'horror', title: 'Podcast: The Missing Night Shift', prompt: 'Draft a true horror podcast script about an entire night shift disappearing from a local staffing agency in 2017. Emphasize the eerie silence of the abandoned breakroom.' },
    { cat: 'horror', title: 'VHS Tape: The Moose Lodge', prompt: 'Generate a 1980s camcorder aesthetic still frame. An empty lodge hall decorated for a party, but the chairs are stacked in impossible, gravity-defying geometric shapes.' },
    { cat: 'horror', title: 'The Appalachian Cryptid', prompt: 'Fidelity: 8K photoreal, low exposure. Scene: A dense, terrifying thicket of Appalachian woods. A massive, unnatural creature composed of antlers and shadow steps into a sliver of moonlight.' },
    { cat: 'horror', title: 'Echoes in the Matterhorn', prompt: 'Draft a short, terrifying narrative about a lone employee closing up the Matterhorn Lounge, only to hear the piano playing itself in the dark. Focus on sensory details.' },
    { cat: 'horror', title: 'Found Footage: The Tunnels', prompt: 'Fidelity: Grainy night-vision. Scene: Looking down a claustrophobic, flooded concrete tunnel under the mountains. A pair of pale hands are gripping the edge of the water.' },
    { cat: 'horror', title: 'The Red Stag Apparition', prompt: 'Fidelity: Cinematic 8K, high contrast. Scene: A beautiful dining room violently torn apart. In the center, a perfectly pristine, glowing red stag statue that casts no shadow.' },
    { cat: 'horror', title: 'Podcast: The 1981 Middletown Tapes', prompt: 'Act as an investigative journalist. Write a script analyzing recovered audio tapes from 1981, featuring distorted voices predicting local structural collapses.' },
    { cat: 'horror', title: 'VHS Static Entity', prompt: 'Generate a corrupted VHS still frame. The image is mostly static and tracking errors, but the distinct shape of a screaming face is visible within the white noise. 16:9.' },
    { cat: 'horror', title: 'The Midnight Highway', prompt: 'Fidelity: Neo-Noir horror. Scene: A desolate stretch of highway in southwest Virginia. A vintage car is parked on the shoulder with all doors open, bathed in blood-red taillight glow.' },
    { cat: 'horror', title: 'Podcast: The Hollow Woods', prompt: 'Draft a podcast outline investigating why compasses and GPS fail completely within a specific 3-mile radius of the regional state park. Tone of mounting dread.' },
    { cat: 'horror', title: 'Found Footage: The Basement', prompt: 'Fidelity: Heavy film grain, low light. Scene: Looking down a rotting wooden staircase into a pitch-black basement. The only light source is a single, floating, unnatural blue orb.' },
    { cat: 'horror', title: 'The Static Radio', prompt: 'Macro shot of an old 1970s radio dial. The wood is rotting. The glowing frequency needle is pointing to a station that does not exist. Cinematic low lighting.' },
    { cat: 'horror', title: 'Found Footage: The Restaurant Kitchen', prompt: 'Grainy security cam footage of an industrial restaurant kitchen at 3 AM. The stainless steel tables are covered in deep scratch marks. Motion blur in the corner.' },
    { cat: 'horror', title: 'Podcast: The Silhouette in the Window', prompt: 'Write a script about a repeating anomaly in Wytheville where residents report seeing the exact same tall silhouette standing in their second-story windows from the outside.' },
    { cat: 'horror', title: 'The Forgotten Forklift', prompt: 'Fidelity: 8K, Neo-Noir horror. Scene: A massive, rusted forklift abandoned in a dark, flooded warehouse. Something impossibly large is chained to the lifting forks.' },
    { cat: 'horror', title: 'VHS: The Holiday Parade', prompt: 'Corrupted VHS footage of a small-town Christmas parade. The floats are normal, but every single person in the crowd is wearing the exact same featureless white mask.' },
    { cat: 'document', title: 'Premium IT Systems Resume', prompt: 'Act as an executive resume writer. Generate a premium, ATS-optimized IT/Systems Architect resume structure. Include sections for core competencies, professional experience (emphasizing high-level system design), and technical skills. Use strong action verbs and metric-driven bullet points.' },
    { cat: 'document', title: 'App Business Proposal', prompt: 'Act as a corporate consultant. Draft a comprehensive business proposal for a mobile workspace application named "Lava Forged". Include an executive summary, problem statement, proposed solution, timeline, and ROI projection. Maintain a formal, persuasive, and premium tone.' },
    { cat: 'document', title: 'Technical Architecture Doc', prompt: 'Generate a premium technical documentation template for a JavaScript-based web application. Include sections for architecture overview, UI/UX design philosophy, local state management, and deployment protocols. Format with clear Markdown headings and code block placeholders.' },
    { cat: 'document', title: 'Executive Project Pitch', prompt: 'Create a script for a 10-slide premium pitch deck presenting Lavaz Life Designs as an elite digital branding agency. Outline the visual concept for each slide and provide compelling, concise speaking notes for the presenter.' },
    { cat: 'document', title: 'Hospitality System Summary', prompt: 'Draft a high-level executive summary for a new AI-integrated hospitality management system. Emphasize operational efficiency, modern UI/UX design, and seamless employee scheduling. Keep the tone professional, concise, and compelling.' },
    { cat: 'instructional', title: 'Hardware Core Insertion', prompt: 'Fidelity: Technical Illustration. Scene: Step-by-step instructional diagram showing a user inserting a glowing orange battery core into a sleek metallic mobile device. Clean white background, isometric perspective, clear blue arrows indicating direction.' },
    { cat: 'instructional', title: 'Software UI Tap Guide', prompt: 'Fidelity: Minimalist Vector. Scene: A visual guide showing a stylized finger tapping an obsidian black button with neon orange text. High contrast, clear instructional layout, technical UI aesthetic. Transparent background.' },
    { cat: 'instructional', title: 'Precision Hardware Repair', prompt: 'Fidelity: Macro 105mm Photoreal. Scene: An instructional close-up of a precision screwdriver removing a tiny silver screw from a brushed titanium smartphone chassis. Focused lighting, shallow depth of field to emphasize the mechanical action.' },
    { cat: 'instructional', title: 'Server Setup Connection', prompt: 'Fidelity: 3D Render. Scene: An instructional graphic showing a glowing fiber optic cable being plugged into a dark, high-tech server rack port. Cyan glowing indicators. Isometric angle, clean presentation.' },
    { cat: 'instructional', title: 'Industrial Safety Warning', prompt: 'Fidelity: Industrial Design. Scene: A visually striking hazard warning icon. A stylized molten lava drop inside a heavy forged steel triangle. High contrast red and black, instructional manual aesthetic, solid white background.' }
];

const sandboxTemplates = {
    lavaBtn: `<style>\n body { background: #050505; display:flex; justify-content:center; align-items:center; height:100vh; margin:0; }\n button {\n background: #111; color: #ff0b33; border: 1px solid #ff0b33;\n padding: 15px 40px; font-size: 18px; font-weight: bold; border-radius: 8px;\n box-shadow: 0 0 15px rgba(255,11,51,0.4), inset 0 0 10px rgba(255,11,51,0.2);\n text-shadow: 0 0 8px rgba(255,11,51,0.8); cursor: pointer; transition: 0.2s;\n }\n button:active { transform: scale(0.95); box-shadow: 0 0 30px rgba(255,11,51,0.8); }\n</style>\n<button>LAVA CORE</button>`,
    glassCard: `<style>\n body { background: linear-gradient(45deg, #a855f7, #3b82f6); display:flex; justify-content:center; align-items:center; height:100vh; margin:0; }\n .card {\n background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);\n border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 16px;\n padding: 30px; color: white; font-family: sans-serif; box-shadow: 0 15px 25px rgba(0,0,0,0.2);\n }\n</style>\n<div class="card">\n <h2>Glassmorphism</h2>\n <p>Premium UI Element</p>\n</div>`,
    terminal: `<style>\n body { background: #0a0a0a; color: #00ff41; font-family: monospace; padding: 20px; }\n .prompt::before { content: "root@s24plus:~# "; color: #f97316; }\n</style>\n<div>\n <p>System initialized...</p>\n <p class="prompt">apt-get update</p>\n</div>`,
    neonPulse: `<style>\n body{background:#000;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n .box{width:150px;height:150px;border:2px solid #0ff;border-radius:20px;animation:pulse 2s infinite alternate;}\n @keyframes pulse{0%{box-shadow:0 0 10px #0ff, inset 0 0 10px #0ff;} 100%{box-shadow:0 0 40px #0ff, inset 0 0 40px #0ff;}}\n</style>\n<div class="box"></div>`,
    cyberInput: `<style>\n body{background:#111;padding:50px;font-family:sans-serif;}\n input{background:transparent;border:none;border-bottom:2px solid #f97316;color:#fff;padding:10px;font-size:18px;outline:none;transition:0.3s;width:100%;}\n input:focus{border-bottom-color:#0ff;box-shadow:0 4px 10px -4px #0ff;}\n</style>\n<input type="text" placeholder="Enter coordinates...">`,
    liquidLoader: `<style>\n body{background:#0b1220;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n .loader{width:60px;height:60px;border-radius:50%;background:linear-gradient(45deg,#f97316,#be123c);animation:spin 1s linear infinite, morph 2s ease-in-out infinite alternate;}\n @keyframes spin{to{transform:rotate(360deg);}}\n @keyframes morph{0%{border-radius:40% 60% 70% 30% / 40% 50% 60% 50%;} 100%{border-radius:60% 40% 30% 70% / 60% 30% 70% 40%;}}\n</style>\n<div class="loader"></div>`,
    steelBadge: `<style>\n body{background:#222;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;}\n .badge{background:linear-gradient(135deg,#888,#ddd,#555);padding:15px 30px;border-radius:8px;font-weight:900;color:#111;text-shadow:1px 1px 0 rgba(255,255,255,0.5);box-shadow:0 10px 20px rgba(0,0,0,0.5),inset 0 0 0 2px rgba(255,255,255,0.3);border:1px solid #111;}\n</style>\n<div class="badge">LLD AUTHORIZED</div>`,
    holoText: `<style>\n body{background:#050505;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n h1{font-family:sans-serif;font-size:4rem;color:transparent;-webkit-text-stroke:1px rgba(0,255,255,0.5);background:linear-gradient(90deg,#0ff,#f0f,#0ff);-webkit-background-clip:text;animation:pan 3s linear infinite;background-size:200% auto;}\n @keyframes pan{to{background-position:200% center;}}\n</style>\n<h1>SYSTEM ONLINE</h1>`,
    darkCard: `<style>\n body{background:#0a0f1d;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;}\n .card{background:#111827;border:1px solid rgba(255,255,255,0.05);border-radius:16px;padding:24px;width:300px;box-shadow:0 20px 40px rgba(0,0,0,0.5);}\n h3{color:#fff;margin-top:0;} p{color:#94a3b8;font-size:14px;}\n</style>\n<div class="card"><h3>Obsidian Panel</h3><p>High-contrast, low-glare premium container.</p></div>`,
    glitchBtn: `<style>\n body{background:#111;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n button{padding:15px 30px;background:transparent;color:#fff;border:2px solid #fff;text-transform:uppercase;font-weight:bold;position:relative;overflow:hidden;cursor:pointer;}\n button::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:#f97316;transition:0.3s;z-index:-1;transform:skewX(-45deg);}\n button:hover::before{left:0;}\n</style>\n<button>Hover Me</button>`,
    matrixRain: `<style>body{margin:0;background:#000;overflow:hidden;}</style><canvas id="c"></canvas><script>\n const c=document.getElementById("c"),ctx=c.getContext("2d");c.width=window.innerWidth;c.height=window.innerHeight;const letters="01".split(""),drops=[];for(let x=0;x<c.width/20;x++)drops[x]=1;\n setInterval(()=>{ctx.fillStyle="rgba(0,0,0,0.1)";ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle="#0f0";ctx.font="20px monospace";for(let i=0;i<drops.length;i++){const text=letters[Math.floor(Math.random()*letters.length)];ctx.fillText(text,i*20,drops[i]*20);if(drops[i]*20>c.height&&Math.random()>0.975)drops[i]=0;drops[i]++;}},50);\n<\/script>`,
    neumorphBtn: `<style>\n body{background:#e0e5ec;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n button{padding:20px 40px;border:none;border-radius:15px;background:#e0e5ec;box-shadow:9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);font-size:18px;color:#4d4d4d;font-weight:bold;cursor:pointer;transition:0.2s;}\n button:active{box-shadow:inset 6px 6px 10px 0 rgba(163,177,198,0.7), inset -6px -6px 10px 0 rgba(255,255,255,0.8);}\n</style>\n<button>PRESS</button>`,
    shimmerText: `<style>\n body{background:#000;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;}\n .shimmer{color:rgba(255,255,255,0.1);background:-webkit-gradient(linear,left top,right top,from(#222),to(#222),color-stop(0.5,#fff));-webkit-background-size:125px 100%;-webkit-background-clip:text;animation:shimmer 2s infinite;font-size:3rem;font-weight:900;}\n @keyframes shimmer{0%{background-position:top left;} 100%{background-position:top right;}}\n</style>\n<div class="shimmer">LAVAZ LIFE</div>`,
    radarScan: `<style>\n body{background:#050505;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n .radar{width:200px;height:200px;border-radius:50%;border:2px solid #0f0;position:relative;overflow:hidden;box-shadow:0 0 20px rgba(0,255,0,0.2);}\n .radar::before{content:"";position:absolute;top:50%;left:50%;width:100%;height:100%;background:conic-gradient(from 0deg, rgba(0,255,0,0) 70%, rgba(0,255,0,0.8) 100%);transform-origin:0 0;animation:scan 2s linear infinite;}\n @keyframes scan{to{transform:rotate(360deg);}}\n</style>\n<div class="radar"></div>`,
    floatingNav: `<style>\n body{background:#1e293b;margin:0;display:flex;justify-content:center;padding-top:20px;font-family:sans-serif;}\n .nav{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);padding:10px 20px;border-radius:30px;display:flex;gap:20px;border:1px solid rgba(255,255,255,0.2);}\n .nav a{color:#fff;text-decoration:none;font-size:14px;font-weight:bold;transition:0.2s;}\n .nav a:hover{color:#f97316;}\n</style>\n<div class="nav"><a href="#">HOME</a><a href="#">VAULT</a><a href="#">SYSTEM</a></div>`,
    carbonFiber: `<style>\n body{height:100vh;margin:0;background:radial-gradient(black 15%,transparent 16%) 0 0,radial-gradient(black 15%,transparent 16%) 8px 8px,radial-gradient(rgba(255,255,255,.1) 15%,transparent 20%) 0 1px,radial-gradient(rgba(255,255,255,.1) 15%,transparent 20%) 8px 9px;background-color:#282828;background-size:16px 16px;}\n</style>`,
    typewriter: `<style>body{background:#111;color:#0f0;font-family:monospace;padding:30px;font-size:1.5rem;}</style>\n<div id="text"></div>\n<script>\n const str="Connecting to secure mainframe...";let i=0;\n setInterval(()=>{if(i<str.length)document.getElementById("text").innerHTML+=str.charAt(i++);},100);\n<\/script>`,
    alertBanner: `<style>\n body{background:#111;margin:0;font-family:sans-serif;}\n .banner{background:linear-gradient(90deg,#ef4444,#991b1b);color:#fff;padding:15px;text-align:center;font-weight:bold;text-transform:uppercase;letter-spacing:2px;box-shadow:0 5px 15px rgba(239,68,68,0.4);animation:flash 2s infinite;}\n @keyframes flash{0%,100%{opacity:1;} 50%{opacity:0.8;}}\n</style>\n<div class="banner">WARNING: ANOMALY DETECTED</div>`,
    magneticBtn: `<style>\n body{background:#111;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n button{padding:20px 40px;background:#f97316;color:#fff;border:none;border-radius:30px;font-weight:bold;cursor:pointer;transition:transform 0.1s;}\n</style>\n<button id="btn">MAGNETIC</button>\n<script>\n const btn=document.getElementById("btn");\n btn.addEventListener("mousemove",(e)=>{const r=btn.getBoundingClientRect();const x=e.clientX-r.left-r.width/2;const y=e.clientY-r.top-r.height/2;btn.style.transform=\`translate(\${x*0.3}px,\${y*0.3}px)\`;});\n btn.addEventListener("mouseleave",()=>btn.style.transform="translate(0,0)");\n<\/script>`,
    goldenHourBg: `<style>\n body{margin:0;height:100vh;background:linear-gradient(45deg,#ff7e5f,#feb47b);animation:hue 10s infinite alternate;}\n @keyframes hue{to{filter:hue-rotate(30deg);}}\n</style>`,
    sciFiToggle: `<style>\n body{background:#0a0a0a;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n input[type="checkbox"]{appearance:none;width:60px;height:30px;background:#333;border-radius:15px;position:relative;cursor:pointer;outline:none;box-shadow:inset 0 0 5px rgba(0,0,0,0.5);transition:0.3s;}\n input[type="checkbox"]::after{content:"";position:absolute;top:3px;left:3px;width:24px;height:24px;background:#555;border-radius:50%;transition:0.3s;}\n input[type="checkbox"]:checked{background:#f97316;box-shadow:0 0 15px #f97316;}\n input[type="checkbox"]:checked::after{left:33px;background:#fff;}\n</style>\n<input type="checkbox">`,
    gradientText: `<style>\n body{background:#111;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;}\n h1{font-size:5rem;background:linear-gradient(to right,#3b82f6,#8b5cf6,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}\n</style>\n<h1>NOTE GURU</h1>`,
    loadingDots: `<style>\n body{background:#111;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;gap:10px;}\n .dot{width:15px;height:15px;background:#0ff;border-radius:50%;animation:bounce 0.5s infinite alternate;}\n .dot:nth-child(2){animation-delay:0.1s;} .dot:nth-child(3){animation-delay:0.2s;}\n @keyframes bounce{to{transform:translateY(-15px);}}\n</style>\n<div class="dot"></div><div class="dot"></div><div class="dot"></div>`,
    hudCircle: `<style>\n body{background:#050505;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n .circle{width:150px;height:150px;border:2px dashed #f97316;border-radius:50%;animation:spin 10s linear infinite;display:flex;justify-content:center;align-items:center;}\n .inner{width:100px;height:100px;border:2px solid rgba(249,115,22,0.3);border-top:2px solid #f97316;border-radius:50%;animation:spin 3s linear infinite reverse;}\n @keyframes spin{to{transform:rotate(360deg);}}\n</style>\n<div class="circle"><div class="inner"></div></div>`,
    premiumSkeleton: `<style>\n body{background:#0a0f1d;padding:40px;margin:0;}\n .skel{width:100%;height:100px;background:#1e293b;border-radius:12px;position:relative;overflow:hidden;}\n .skel::after{content:"";position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent);animation:load 1.5s infinite;}\n @keyframes load{to{left:100%;}}\n</style>\n<div class="skel"></div>`,
    animatedBorder: `<style>\n body{background:#111;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n .box{position:relative;width:200px;height:250px;background:#222;border-radius:10px;overflow:hidden;display:flex;justify-content:center;align-items:center;color:#fff;font-family:sans-serif;}\n .box::before{content:"";position:absolute;width:100px;height:300px;background:linear-gradient(#00ccff,#d400d4);animation:rot 4s linear infinite;}\n .box::after{content:"";position:absolute;inset:4px;background:#111;border-radius:8px;}\n @keyframes rot{to{transform:rotate(360deg);}}\n span{position:relative;z-index:1;font-weight:bold;}\n</style>\n<div class="box"><span>PREMIUM</span></div>`,
    cyberSlider: `<style>\n body{background:#111;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;}\n input[type=range]{-webkit-appearance:none;width:80%;background:transparent;}\n input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:20px;width:10px;background:#f97316;cursor:pointer;box-shadow:0 0 10px #f97316;}\n input[type=range]::-webkit-slider-runnable-track{width:100%;height:4px;background:#333;}\n</style>\n<input type="range" min="1" max="100" value="50">`,
    textReveal: `<style>\n body{background:#111;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;color:#fff;font-size:2rem;}\n .reveal{position:relative;overflow:hidden;}\n .reveal::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#0ff;transform:translateX(-100%);animation:rev 2s forwards;}\n @keyframes rev{0%{transform:translateX(-100%);} 50%{transform:translateX(0);} 100%{transform:translateX(100%);}}\n</style>\n<div class="reveal">INITIALIZATION COMPLETE</div>`,
    frostedMenu: `<style>\n body{background:url(https://picsum.photos/800/600) center/cover;margin:0;padding:20px;font-family:sans-serif;}\n .menu{background:rgba(0,0,0,0.5);backdrop-filter:blur(15px);padding:20px;border-radius:12px;color:#fff;width:200px;border:1px solid rgba(255,255,255,0.2);}\n ul{list-style:none;padding:0;margin:0;} li{padding:10px;border-bottom:1px solid rgba(255,255,255,0.1);} li:last-child{border:none;}\n</style>\n<div class="menu"><ul><li>Dashboard</li><li>Settings</li><li>Logout</li></ul></div>`,
    holographicData: `<style>\n body{background:#000;color:#0ff;font-family:monospace;padding:20px;display:flex;gap:20px;}\n .col{display:flex;flex-direction:column;gap:5px;opacity:0.8;}\n</style>\n<div class="col" id="d1"></div><div class="col" id="d2"></div>\n<script>\n setInterval(()=>{document.getElementById("d1").innerHTML+=Math.random().toString(16).substr(2,8)+"<br>";document.getElementById("d2").innerHTML+=Math.random().toString(36).substr(2,8)+"<br>";if(document.getElementById("d1").childElementCount>20){document.getElementById("d1").innerHTML="";document.getElementById("d2").innerHTML="";}},100);\n<\/script>`
};

const defaultState = { notes: [], activeId: null, journalContent: "", vaultItems: [], brandingPref: "Lava Forged Default", promptHistory: [] };

const app = {
  state: structuredClone(defaultState), currentView: "notes", sidebarOpen: false,

  async init() {
    const saved = await localforage.getItem(STORAGE_KEY);
    if (saved) this.state = { ...structuredClone(defaultState), ...saved };
    
    this.ensureSeedNote(); this.renderNotes(); this.renderVault(); this.renderLibrary(); this.renderSandboxButtons();
    document.getElementById("brand-selector").value = this.state.brandingPref || "Lava Forged Default";
    this.repairDiagnostics();
    this.setView("notes");
    
    const jEd = document.getElementById("journal-editor");
    if(jEd) jEd.innerHTML = this.state.journalContent || "Forge entries here...";
  },

  async persist() {
    await localforage.setItem(STORAGE_KEY, this.state);
    const st = document.getElementById("save-status");
    if(st) { st.style.opacity = "1"; setTimeout(() => st.style.opacity = "0", 1000); }
  },

  toast(msg) {
    const toast = document.getElementById("toast");
    document.getElementById("toast-msg").innerText = msg;
    toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2000);
  },

  copyText(text) { navigator.clipboard.writeText(text).then(() => this.toast("Copied")); },

  setView(view) {
    this.currentView = view;
    document.querySelectorAll('.tab-pane').forEach(v => v.classList.add('hidden-view'));
    document.getElementById(`view-${view}`).classList.remove('hidden-view');
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`tab-${view}`).classList.add('active');
    if (this.sidebarOpen) this.toggleSidebar();
    if (view === 'notes') this.updateWordCount();
  },

  // --- GLOBAL ---
  toggleWorkMode() {
    const active = document.body.classList.toggle("work-mode");
    document.getElementById("work-mode-btn").innerText = active ? "WORK ON" : "WORK OFF";
  },
  saveBrandingPref() {
    this.state.brandingPref = document.getElementById("brand-selector").value;
    this.persist();
  },
  filterGlobal() {
    const q = document.getElementById("globalSearch").value;
    this.toast("Search: " + q);
  },
  repairDiagnostics() {
    const dModel = document.getElementById("diag-model");
    const dPlat = document.getElementById("diag-platform");
    const dRes = document.getElementById("diag-res");
    const dBatt = document.getElementById("diag-batt");
    if(dModel) dModel.innerText = navigator.userAgent.includes("Android") ? "Android Device" : "Web Engine";
    if(dPlat) dPlat.innerText = navigator.platform;
    if(dRes) dRes.innerText = `${window.screen.width}x${window.screen.height}`;
    if (navigator.getBattery && dBatt) {
      navigator.getBattery().then(b => { dBatt.innerText = `${Math.round(b.level * 100)}% (${b.charging ? 'Charging' : 'Unplugged'})`; });
    } else if(dBatt) { dBatt.innerText = "Unsupported"; }
    this.toast("Diagnostics Calibrated");
  },
  async nukeData() {
      if(confirm("WARNING: This will wipe all Lava Forged data. Proceed?")) {
          await localforage.clear();
          location.reload();
      }
  },

  // --- LIBRARY ---
  renderLibrary() {
      const filter = document.getElementById("lib-filter").value;
      const grid = document.getElementById("library-grid");
      
      const colorMap = {
          'lld': { border: 'border-l-orange-500', text: 'text-orange-400', badge: 'bg-orange-500/10' },
          'cinematic': { border: 'border-l-blue-500', text: 'text-blue-400', badge: 'bg-blue-500/10' },
          'horror': { border: 'border-l-red-600', text: 'text-red-500', badge: 'bg-red-600/10' },
          'document': { border: 'border-l-green-500', text: 'text-green-400', badge: 'bg-green-500/10' },
          'instructional': { border: 'border-l-purple-500', text: 'text-purple-400', badge: 'bg-purple-500/10' }
      };

      let html = '';
      libraryDatabase.forEach(item => {
          if(filter === 'all' || item.cat === filter) {
              const theme = colorMap[item.cat] || { border: 'border-l-slate-500', text: 'text-slate-400', badge: 'bg-slate-500/10' };
              html += `
              <div class="prompt-card border-l-[3px] ${theme.border} transition-all">
                  <button class="copy-fab" onclick="app.copyText('${item.prompt.replace(/'/g, "\\'")}')">COPY</button>
                  <div class="flex items-center gap-2 mb-2 pr-16">
                      <span class="text-[8px] uppercase tracking-widest px-2 py-0.5 rounded ${theme.badge} ${theme.text} font-bold">${item.cat}</span>
                      <h3 class="text-sm font-bold text-white truncate">${item.title}</h3>
                  </div>
                  <div class="prompt-content">${item.prompt}</div>
              </div>`;
          }
      });
      grid.innerHTML = html;
  },

  // --- VAULT ---
  renderVault() {
    const list = document.getElementById("vaultList");
    let total = 0;
    list.innerHTML = this.state.vaultItems.map((item, i) => {
      total += parseFloat(item.amount) || 0;
      return `<div class="vault-card"><div><div class="font-bold text-white text-sm line-clamp-1">${item.name}</div><div class="text-orange-500 text-lg font-black mt-1">$${item.amount}</div></div><div class="flex flex-col gap-2 mt-4">${item.url ? `<button onclick="window.open('${item.url.startsWith('http') ? item.url : 'https://'+item.url}', '_blank')" class="bg-blue-600/20 text-blue-400 text-[10px] font-bold py-1.5 rounded w-full border border-blue-500/30">LAUNCH LINK</button>` : ''}<button class="bg-red-900/40 text-red-500 text-[10px] font-bold py-1.5 rounded w-full hover:bg-red-900/60" onclick="app.removeVaultItem(${i})">REMOVE</button></div></div>`
    }).join("");
    document.getElementById("vault-total").innerHTML = `$${total.toFixed(2)} <span class="text-[10px] text-slate-400 font-normal">/mo</span>`;
  },
  addVaultItem() {
    const name = document.getElementById("vName").value; const amount = document.getElementById("vAmount").value; const url = document.getElementById("vUrl").value;
    if (name && amount) {
      this.state.vaultItems.push({ name, amount, url }); this.persist(); this.renderVault();
      document.getElementById("vName").value = ''; document.getElementById("vAmount").value = ''; document.getElementById("vUrl").value = '';
      this.toast("Vault Updated");
    }
  },
  removeVaultItem(i) { this.state.vaultItems.splice(i, 1); this.persist(); this.renderVault(); },

  // --- SANDBOX ---
  renderSandboxButtons() {
    const container = document.getElementById("sandbox-btn-container");
    let html = '';
    Object.keys(sandboxTemplates).forEach(key => {
        html += `<button class="chrome-metal btn-3d px-3 py-1 rounded text-[9px] whitespace-nowrap" onclick="app.loadTemplate('${key}')">${key}</button>`;
    });
    html += `<button class="bg-red-900/40 text-red-500 px-3 py-1 rounded text-[9px] border border-red-900 font-bold whitespace-nowrap hover:bg-red-900/60" onclick="document.getElementById('sandboxInput').value=''; app.runSandbox();">CLEAR</button>`;
    container.innerHTML = html;
  },
  loadTemplate(key) {
      const code = sandboxTemplates[key];
      if(code) { document.getElementById("sandboxInput").value = code; this.runSandbox(); this.toast(key + " Loaded"); }
  },
  runSandbox() { document.getElementById("sandbox-preview").srcdoc = document.getElementById("sandboxInput").value; },
  copySandbox() { this.copyText(document.getElementById("sandboxInput").value); },

  // --- WORKSPACE ---
  ensureSeedNote() { if (!this.state.notes.length) this.newNote(); else this.selectNote(this.state.activeId || this.state.notes[0].id); },
  newNote() { const id = 'n' + Date.now(); this.state.notes.unshift({ id, title: "New Entry", content: "" }); this.state.activeId = id; this.renderNotes(); this.selectNote(id); this.persist(); },
  selectNote(id) {
    this.state.activeId = id; const n = this.state.notes.find(x => x.id === id);
    if (n) { document.getElementById("note-title").value = n.title; document.getElementById("editor").innerHTML = n.content; }
    this.renderNotes(); this.updateWordCount(); if (this.sidebarOpen) this.toggleSidebar();
  },
  renderNotes() {
    const list = document.getElementById("note-list"); const q = document.getElementById("noteSearch") ? document.getElementById("noteSearch").value.toLowerCase() : "";
    if(!list) return;
    list.innerHTML = this.state.notes.filter(n => n.title.toLowerCase().includes(q)).map(n => `<div onclick="app.selectNote('${n.id}')" class="p-3 rounded-lg cursor-pointer text-[10px] font-bold uppercase ${n.id === this.state.activeId ? 'chrome-metal' : 'inset-screen hover:bg-slate-900'}">${n.title || 'Untitled'}</div>`).join("");
  },
  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; document.getElementById("note-sidebar").classList.toggle("hidden", !this.sidebarOpen); },
  saveWorkspace() {
    const n = this.state.notes.find(x => x.id === this.state.activeId);
    if (n) { n.title = document.getElementById("note-title").value; n.content = document.getElementById("editor").innerHTML; }
    const jEd = document.getElementById("journal-editor"); if(jEd) this.state.journalContent = jEd.innerHTML;
    this.updateWordCount();
    this.persist();
  },
  deleteActiveNote() {
    if (confirm("Delete this entry?")) {
      this.state.notes = this.state.notes.filter(x => x.id !== this.state.activeId); this.state.activeId = this.state.notes[0]?.id; this.ensureSeedNote(); this.persist();
    }
  },
  updateWordCount() {
      const text = document.getElementById("editor").innerText || "";
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const chars = text.length;
      const wc = document.getElementById("word-count");
      if(wc) wc.innerText = `${words} W | ${chars} C`;
  },
  exportAllNotes() {
      if(!this.state.notes.length) return this.toast("No notes to export");
      let out = "LAVA FORGED - WORKSPACE EXPORT\n==============================\n\n";
      this.state.notes.forEach(n => {
          const temp = document.createElement("div");
          temp.innerHTML = n.content;
          out += `[TITLE]: ${n.title}\n[CONTENT]:\n${temp.innerText || ''}\n\n------------------------------\n\n`;
      });
      const blob = new Blob([out], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `LavaForged_Notes_${Date.now()}.txt`;
      a.click();
      this.toast("Workspace Exported");
  },

  // --- PROMPT ARCHITECT ---
  generatePrompt() {
      const topic = document.getElementById("topic").value;
      if (!topic) return;
      const loader = document.getElementById("loader-prompt");
      loader.classList.remove("hidden");
      setTimeout(() => {
        const res = `[PROMPT ARCHITECT]\nTopic: ${topic}\n\nRefined: High-fidelity cinematic rendering of ${topic}, neo-noir style, volumetric lighting, 8K, intricate detail.`;
        document.getElementById("result").innerText = res;
        document.getElementById("resultContainer").classList.remove("hidden");
        loader.classList.add("hidden");
      }, 800);
  },

  // --- MEDIA ---
  switchMediaTab(tab) {
    ["prompt", "podcast", "video"].forEach(t => {
      document.getElementById(`media-view-${t}`).classList.toggle("hidden-view", t !== tab);
      document.getElementById(`tab-media-${t}`).classList.toggle("active", t === tab);
    });
  },
  generateMediaPrompt() {
    const topic = document.getElementById("media-topic").value;
    if (!topic) return;
    document.getElementById("media-result").innerText = `VISUAL DIRECTOR OUT: ${topic}\n[INJECTED] Style: Cinematic, 8K, Ultra-Detail.`;
    document.getElementById("media-resultContainer").classList.remove("hidden");
  },
  generatePodcast() {
    document.getElementById("resultPodcastContainer").classList.remove("hidden");
    document.getElementById("podcast-cover").classList.add("hidden");
    document.getElementById("podcast-image-loader").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("podcast-script").innerText = "SCRIPT: Introduction to the futuristic concept...";
      document.getElementById("podcast-image-loader").classList.add("hidden");
      document.getElementById("podcast-cover").src = "https://picsum.photos/300/200?random=" + Math.random();
      document.getElementById("podcast-cover").classList.remove("hidden");
    }, 1200);
  },
  generateVideo() {
    document.getElementById("resultVideoContainer").classList.remove("hidden");
    document.getElementById("video-frame").classList.add("hidden");
    document.getElementById("video-image-loader").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("video-script").innerText = "STORYBOARD: Pan right over digital horizon...";
      document.getElementById("video-image-loader").classList.add("hidden");
      document.getElementById("video-frame").src = "https://picsum.photos/400/225?random=" + Math.random();
      document.getElementById("video-frame").classList.remove("hidden");
    }, 1200);
  },

  // --- BATCH ---
  runBatch() {
    const target = document.getElementById("batch-target").value;
    const replace = document.getElementById("batch-replace").value;
    const input = document.getElementById("batch-input");
    if (!target) return this.toast("No target");
    input.value = input.value.split(target).join(replace);
    this.toast("Batch Completed");
  },

  // --- JOURNAL UTILS ---
  exportJournalTxt() {
      const text = document.getElementById("journal-editor").innerText;
      const blob = new Blob([text], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `LavaForged_Journal_${Date.now()}.txt`;
      a.click();
      this.toast("Journal Exported");
  },
  clearJournal() {
      if(confirm("Wipe journal content?")) {
          document.getElementById("journal-editor").innerHTML = "";
          this.saveWorkspace();
          this.toast("Journal Cleared");
      }
  }
};

window.app = app;
window.onload = () => app.init();
