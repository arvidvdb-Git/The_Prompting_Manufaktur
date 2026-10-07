// Tool information checked against linked official pages, 7 October 2026.
const TOOL_DIRECTORY = [
  {
    "name": "ChatGPT",
    "type": "Text",
    "logo": "openai.svg",
    "url": "https://chatgpt.com/",
    "source": "https://openai.com/chatgpt/overview/",
    "fit": "General-purpose writing, analysis, document work, and iterative collaboration.",
    "tip": "Attach evidence, specify your audience, and ask for uncertainty and source checks."
  },
  {
    "name": "Claude",
    "type": "Text",
    "logo": "claude.svg",
    "url": "https://claude.ai/",
    "source": "https://www.anthropic.com/claude",
    "fit": "Document synthesis, technical explanations, and structured writing.",
    "tip": "Separate source documents from instructions and define the review criteria."
  },
  {
    "name": "Gemini",
    "type": "Text",
    "logo": "gemini-color.svg",
    "url": "https://gemini.google.com/",
    "source": "https://ai.google.dev/gemini-api/docs/prompting-strategies",
    "fit": "Multimodal assistance and prompt prototyping in Google’s ecosystem.",
    "tip": "Name the input modalities and expected output; verify model-specific capabilities."
  },
  {
    "name": "Perplexity",
    "type": "Text",
    "logo": "perplexity.svg",
    "url": "https://www.perplexity.ai/",
    "source": "https://www.perplexity.ai/hub",
    "fit": "Web research and source-linked synthesis.",
    "tip": "Specify source quality, date range, geography, and how conflicting evidence should be handled."
  },
  {
    "name": "ChatGPT Images",
    "type": "Image",
    "logo": "openai.svg",
    "url": "https://chatgpt.com/",
    "source": "https://help.openai.com/en/articles/11084440-images-in-chatgpt",
    "fit": "Conversational image creation and targeted editing.",
    "tip": "Describe composition and list the features that must remain unchanged during an edit."
  },
  {
    "name": "Midjourney",
    "type": "Image",
    "logo": "midjourney.svg",
    "url": "https://www.midjourney.com/",
    "source": "https://docs.midjourney.com/hc/en-us/articles/32023408776205-Prompt-Basics",
    "fit": "Visual concepts, style exploration, and art direction.",
    "tip": "Use concise visual language and model-specific reference or parameter controls."
  },
  {
    "name": "Adobe Firefly",
    "type": "Image",
    "logo": "adobe-color.svg",
    "url": "https://www.adobe.com/products/firefly.html",
    "source": "https://helpx.adobe.com/firefly/web/get-started/access-the-app/firefly-workspace-overview.html",
    "fit": "Image creation and editing in Adobe creative workflows.",
    "tip": "Combine the prompt with supported composition and style references; inspect edited details."
  },
  {
    "name": "Ideogram",
    "type": "Image",
    "logo": "ideogram.svg",
    "url": "https://ideogram.ai/",
    "source": "https://docs.ideogram.ai/",
    "fit": "Image generation, graphic concepts, and visual text exploration.",
    "tip": "Quote exact required wording, describe its placement, and proofread all generated text."
  },
  {
    "name": "GitHub Copilot",
    "type": "Code",
    "logo": "githubcopilot.svg",
    "url": "https://github.com/features/copilot",
    "source": "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering",
    "fit": "Code assistance, repository context, and developer workflows.",
    "tip": "Reference the affected files, expected behavior, constraints, and test commands."
  },
  {
    "name": "Cursor",
    "type": "Code",
    "logo": "cursor.svg",
    "url": "https://cursor.com/",
    "source": "https://cursor.com/docs",
    "fit": "AI-assisted coding and changes within a repository-aware editor.",
    "tip": "Use focused repository context and scoped rules; ask for a minimal verified patch."
  },
  {
    "name": "Claude Code",
    "type": "Code",
    "logo": "claude.svg",
    "url": "https://www.anthropic.com/claude-code",
    "source": "https://www.anthropic.com/engineering/claude-code-best-practices",
    "fit": "Agentic coding, debugging, and multi-file engineering tasks.",
    "tip": "Specify the goal, repository conventions, acceptance criteria, and verification steps."
  },
  {
    "name": "OpenAI Codex",
    "type": "Code",
    "logo": "openai.svg",
    "url": "https://openai.com/codex/",
    "source": "https://developers.openai.com/learn/codex",
    "fit": "Coding-agent workflows for implementation, refactoring, and review.",
    "tip": "Provide a reproducible issue or clear specification; request tests and an inspected diff."
  },
  {
    "name": "Runway",
    "type": "Video",
    "logo": "runway.svg",
    "url": "https://runwayml.com/",
    "source": "https://help.runwayml.com/hc/en-us/articles/42460036199443-Text-to-Video-Prompting-Guide",
    "fit": "Shot creation and motion-driven video experimentation.",
    "tip": "State one dominant action and camera motion; check the guide for the chosen model."
  },
  {
    "name": "Google Veo",
    "type": "Video",
    "logo": "gemini-color.svg",
    "url": "https://ai.google.dev/gemini-api/docs/video",
    "source": "https://ai.google.dev/gemini-api/docs/video",
    "fit": "Text- and image-guided video generation in supported Google products.",
    "tip": "Define action, camera, timing, continuity, and audio where supported. Google Gemini brand mark shown."
  },
  {
    "name": "Luma Dream Machine",
    "type": "Video",
    "logo": "luma.svg",
    "url": "https://lumalabs.ai/dream-machine",
    "source": "https://lumalabs.ai/learning-hub",
    "fit": "Video generation and visual transformation workflows.",
    "tip": "Describe motion and preserved scene properties, then review temporal consistency."
  },
  {
    "name": "Adobe Firefly Video",
    "type": "Video",
    "logo": "adobe-color.svg",
    "url": "https://www.adobe.com/products/firefly.html",
    "source": "https://helpx.adobe.com/firefly/web/get-started/access-the-app/firefly-workspace-overview.html",
    "fit": "Video creation within Adobe’s generative creative workspace.",
    "tip": "Choose the model first, then tailor reference frames, motion, and duration to its controls."
  },
  {
    "name": "Microsoft Copilot",
    "type": "Text",
    "logo": "copilot-color.svg",
    "url": "https://copilot.microsoft.com/",
    "source": "https://www.microsoft.com/en-us/microsoft-365-copilot/chat",
    "fit": "Conversational writing, brainstorming and work assistance in Microsoft’s ecosystem.",
    "tip": "Name the deliverable and audience; specify which supplied work context should inform the answer."
  },
  {
    "name": "Gemini Notebook",
    "type": "Text",
    "logo": "gemini-color.svg",
    "url": "https://notebook.google.com/",
    "source": "https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/",
    "fit": "Source-grounded research and synthesis; formerly NotebookLM. Gemini parent mark shown.",
    "tip": "Select the relevant sources, ask a focused question, and check cited passages against originals."
  },
  {
    "name": "Mistral Vibe",
    "type": "Text",
    "logo": "mistral-color.svg",
    "url": "https://chat.mistral.ai/",
    "source": "https://mistral.ai/products/vibe/",
    "fit": "Chat, writing and research assistance; formerly Le Chat.",
    "tip": "Supply approved context and ask it to distinguish sourced findings from assumptions."
  },
  {
    "name": "Grok",
    "type": "Text",
    "logo": "grok.svg",
    "url": "https://grok.com/",
    "source": "https://docs.x.ai/grok/overview",
    "fit": "Conversational research, explanation and writing with supported search tools.",
    "tip": "Specify time range and primary-source standards; independently check consequential claims."
  },
  {
    "name": "FLUX Playground",
    "type": "Image",
    "logo": "flux.svg",
    "url": "https://playground.bfl.ai/",
    "source": "https://help.bfl.ai/articles/8667153955-what-is-the-bfl-playground",
    "fit": "Explore Black Forest Labs image generation and editing models.",
    "tip": "Describe subject, composition and light; for edits explicitly identify preserved features."
  },
  {
    "name": "Recraft",
    "type": "Image",
    "logo": "recraft.svg",
    "url": "https://www.recraft.ai/",
    "source": "https://www.recraft.ai/ai-image-generator",
    "fit": "Design-oriented image, vector and graphic asset generation.",
    "tip": "Specify intended use, layout, palette and output type; check the vector paths before manufacturing use."
  },
  {
    "name": "Krea",
    "type": "Image",
    "logo": "krea.svg",
    "url": "https://www.krea.ai/",
    "source": "https://www.krea.ai/image",
    "fit": "Image generation, editing and visual exploration with multiple models.",
    "tip": "Choose the model first; vary one visual property at a time and keep reference assets consistent."
  },
  {
    "name": "Gemini Images",
    "type": "Image",
    "logo": "gemini-color.svg",
    "url": "https://gemini.google.com/",
    "source": "https://ai.google.dev/gemini-api/docs/image-generation",
    "fit": "Conversational image generation and editing with Google Gemini models.",
    "tip": "Describe composition and visual details, attach references, and specify what each edit should preserve."
  },
  {
    "name": "Replit",
    "type": "Code",
    "logo": "replit-color.svg",
    "url": "https://replit.com/",
    "source": "https://docs.replit.com/",
    "fit": "Build and iterate applications with an AI development agent.",
    "tip": "Start with a small working milestone, explicit user flows and acceptance tests; review access rules."
  },
  {
    "name": "JetBrains Junie",
    "type": "Code",
    "logo": "junie.svg",
    "url": "https://junie.jetbrains.com/",
    "source": "https://www.jetbrains.com/help/junie/",
    "fit": "Coding-agent assistance for implementation and developer workflows.",
    "tip": "Identify relevant project files, conventions and test commands; verify behavior before accepting changes."
  },
  {
    "name": "Lovable",
    "type": "Code",
    "logo": "lovable-color.svg",
    "url": "https://lovable.dev/",
    "source": "https://docs.lovable.dev/",
    "fit": "Prompt-driven web application creation and iterative development.",
    "tip": "Specify the user journey, data model and access rules; build one tested flow before adding more features."
  },
  {
    "name": "Devin Desktop",
    "type": "Code",
    "logo": "devin.svg",
    "url": "https://devin.ai/desktop",
    "source": "https://devin.ai/desktop",
    "fit": "An editor and workspace for coordinating local and cloud coding agents.",
    "tip": "Break the task into bounded milestones, define review gates and require evidence for completion."
  },
  {
    "name": "Kling AI",
    "type": "Video",
    "logo": "kling-color.svg",
    "url": "https://kling.ai/",
    "source": "https://kling.ai/app",
    "fit": "Prompt- and reference-guided video creation and visual effects.",
    "tip": "Describe a coherent action, camera movement and continuity constraints; use model-supported controls."
  },
  {
    "name": "Pika",
    "type": "Video",
    "logo": "pika.svg",
    "url": "https://pika.art/",
    "source": "https://pika.art/",
    "fit": "Short-form video creation, animation and visual transformations.",
    "tip": "Define the subject’s action and intended effect; keep each shot focused and inspect motion artifacts."
  },
  {
    "name": "Hailuo AI",
    "type": "Video",
    "logo": "hailuo-color.svg",
    "url": "https://hailuoai.video/",
    "source": "https://hailuoai.video/",
    "fit": "Text- and reference-guided video generation with MiniMax models.",
    "tip": "Specify subject, action, camera and scene continuity; inspect the result frame by frame for important details."
  },
  {
    "name": "Synthesia",
    "type": "Video",
    "logo": "synthesia.png",
    "url": "https://www.synthesia.io/",
    "source": "https://www.synthesia.io/",
    "fit": "Avatar-led business, training and instructional videos.",
    "tip": "Split the script into one learning point per scene, with visual directions and a pronunciation check."
  }
];
