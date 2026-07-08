export type ResourceStatus = 'ready' | 'planned' | 'after-event';
export type WorkshopLocale = 'es' | 'en';

type Localized<T> = Record<WorkshopLocale, T>;

export type PresentationSlide = {
  kind: 'cover' | 'statement' | 'sequence' | 'list' | 'split' | 'diagram' | 'checklist' | 'journey' | 'closing';
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  lines?: string[];
  steps?: Array<{
    code: string;
    title: string;
    body?: string;
    active?: boolean;
  }>;
  items?: string[];
  columns?: Array<{
    label: string;
    items: string[];
  }>;
  nodes?: Array<{
    label: string;
    detail?: string;
  }>;
  rows?: Array<{
    left: string;
    right: string;
    active?: boolean;
  }>;
};

export type WorkshopResource = {
  number: string;
  slug: string;
  time: string;
  title: Localized<string>;
  summary: Localized<string>;
  artifact: Localized<string>;
  presentationPath?: Localized<string>;
  guidePath?: Localized<string>;
  statuses: {
    presentation: ResourceStatus;
    guide: ResourceStatus;
    video: ResourceStatus;
    links: ResourceStatus;
  };
  resourceLinks?: Array<{
    label: Localized<string>;
    href: string;
    description?: Localized<string>;
  }>;
  slides?: Partial<Localized<PresentationSlide[]>>;
};

const workshopOneSlidesEs: PresentationSlide[] = [
  {
    kind: 'cover',
    eyebrow: 'Workshop 01',
    title: 'Fundamentos IA x Blockchain',
    subtitle: 'Construyendo software que puede trabajar por nosotros.',
  },
  {
    kind: 'statement',
    eyebrow: 'Marco',
    title: 'El software está cambiando.',
    lines: [
      'Durante décadas, el software esperó a los usuarios.',
      'Los usuarios daban clic. Escribían. Tomaban cada decisión.',
      'Ahora, el software puede razonar.',
      'Pronto, el software trabajará por nosotros.',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'Evolución del software',
    title: 'De cómputo a participación.',
    steps: [
      { code: '01', title: 'Cómputo', body: 'Ejecuta instrucciones.' },
      { code: '02', title: 'Razonar', body: 'Entiende, infiere y toma decisiones.', active: true },
      { code: '03', title: 'Actuar', body: 'Usa herramientas y logra objetivos.' },
      { code: '04', title: 'Participar', body: 'Tiene identidad, intercambia valor y coordina.' },
    ],
  },
  {
    kind: 'list',
    eyebrow: 'La pieza que faltaba',
    title: 'Los LLMs le dieron al software un motor de razonamiento.',
    body: 'Los modelos de lenguaje hicieron práctico que el software trabaje con lenguaje, planes, código y ambigüedad.',
    items: [
      'Entender lenguaje',
      'Generar ideas',
      'Planear',
      'Escribir código',
      'Resolver problemas',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'Evolución de IA',
    title: 'La práctica ya no se queda en prompts.',
    steps: [
      { code: 'PE', title: 'Prompt engineering', body: 'Dile a la IA qué hacer.' },
      { code: 'CE', title: 'Context engineering', body: 'Dale lo que necesita saber.' },
      { code: 'AE', title: 'Agent engineering', body: 'Dale una meta que cumplir.' },
      { code: 'HE', title: 'Harness engineering', body: 'Dale un entorno donde pueda operar de forma confiable.' },
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Chatbots vs agentes',
    title: 'Un chatbot responde preguntas. Un agente completa trabajo.',
    columns: [
      {
        label: 'Chatbot',
        items: ['Responde en una conversación', 'Necesita al usuario para cada siguiente paso', 'Casi siempre produce texto'],
      },
      {
        label: 'Agente',
        items: ['Usa herramientas', 'Ejecuta código', 'Lee y escribe archivos', 'Llama APIs', 'Trabaja hacia metas'],
      },
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'Límite del sistema',
    title: 'Pero actuar no basta.',
    lines: [
      'Si un agente puede escribir software, analizar contratos, reservar viajes y administrar infraestructura...',
      '¿Cómo sabe otro sistema quién es ese agente?',
      '¿Cómo autoriza al agente?',
      '¿Cómo paga a otro servicio o posee activos digitales?',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'La intersección',
    title: 'La inteligencia no es toda la historia.',
    columns: [
      {
        label: 'IA permite que el software pueda',
        items: ['Razonar', 'Actuar'],
      },
      {
        label: 'Blockchain permite que el software pueda',
        items: ['Identificarse', 'Intercambiar valor', 'Poseer recursos', 'Coordinarse con otros sistemas'],
      },
    ],
    body: 'Juntas, habilitan software que puede trabajar por nosotros.',
  },
  {
    kind: 'diagram',
    eyebrow: 'Arquitectura de hoy',
    title: 'Hoy construimos la primera capa: el cerebro.',
    nodes: [
      { label: 'Tu aplicación' },
      { label: 'Backend' },
      { label: 'Nebius Token Factory', detail: 'Acceso al modelo' },
      { label: 'Modelo de lenguaje', detail: 'Razonamiento' },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Workshop de hoy',
    title: 'Al final, tu aplicación puede razonar.',
    items: [
      'Clonar el template del proyecto',
      'Configurar el entorno',
      'Obtener una API key de Nebius Token Factory',
      'Conectar el backend',
      'Hacer la primera request al LLM',
    ],
  },
  {
    kind: 'journey',
    eyebrow: 'El camino',
    title: 'Cada workshop construye sobre el anterior.',
    rows: [
      { left: 'Razonar', right: 'Workshop 1 - Dale cerebro a nuestra aplicación.', active: true },
      { left: 'Actuar', right: 'Workshop 2 - Conviértela en agente.' },
      { left: 'Participar', right: 'Workshop 3 - Dale un trabajo al agente.' },
      { left: 'Crear valor', right: 'Workshop 4 - Deja que el agente cobre.' },
    ],
  },
  {
    kind: 'closing',
    eyebrow: 'Modo build',
    title: 'A construir.',
    subtitle: 'Abre el template, conecta el backend y haz la primera request al LLM.',
  },
];

const workshopOneSlidesEn: PresentationSlide[] = [
  {
    kind: 'cover',
    eyebrow: 'Workshop 01',
    title: 'AI x Blockchain Foundations',
    subtitle: 'Building software that can work for us.',
  },
  {
    kind: 'statement',
    eyebrow: 'Frame',
    title: 'Software is changing.',
    lines: [
      'For decades, software waited for users.',
      'Users clicked. Users typed. Users made every decision.',
      'Now, software can reason.',
      'Soon, software will work on our behalf.',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'Software evolution',
    title: 'From compute to participation.',
    steps: [
      { code: '01', title: 'Compute', body: 'Execute instructions.' },
      { code: '02', title: 'Reason', body: 'Understand, infer, and make decisions.', active: true },
      { code: '03', title: 'Act', body: 'Use tools and accomplish goals.' },
      { code: '04', title: 'Participate', body: 'Own identity, exchange value, and coordinate.' },
    ],
  },
  {
    kind: 'list',
    eyebrow: 'The missing piece',
    title: 'LLMs gave software a reasoning engine.',
    body: 'Large Language Models made it practical for software to work with language, plans, code, and ambiguity.',
    items: [
      'Understand language',
      'Generate ideas',
      'Plan',
      'Write code',
      'Solve problems',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'AI evolution',
    title: 'The craft moved beyond prompts.',
    steps: [
      { code: 'PE', title: 'Prompt engineering', body: 'Tell the AI what to do.' },
      { code: 'CE', title: 'Context engineering', body: 'Give the AI what it needs to know.' },
      { code: 'AE', title: 'Agent engineering', body: 'Give the AI a goal to accomplish.' },
      { code: 'HE', title: 'Harness engineering', body: 'Give the AI an environment where it can operate reliably.' },
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Chatbots vs agents',
    title: 'A chatbot answers questions. An agent completes work.',
    columns: [
      {
        label: 'Chatbot',
        items: ['Responds in a conversation', 'Needs a user for every next step', 'Mostly produces text'],
      },
      {
        label: 'Agent',
        items: ['Uses tools', 'Executes code', 'Reads and writes files', 'Calls APIs', 'Works toward goals'],
      },
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'System boundary',
    title: 'But acting is not enough.',
    lines: [
      'If an agent can write software, analyze contracts, book travel, and manage infrastructure...',
      'How does another system know who that agent is?',
      'How does it authorize the agent?',
      'How does it pay another service or own digital assets?',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'The intersection',
    title: 'Intelligence is not the whole story.',
    columns: [
      {
        label: 'AI enables software to',
        items: ['Reason', 'Act'],
      },
      {
        label: 'Blockchain enables software to',
        items: ['Identify itself', 'Exchange value', 'Own resources', 'Coordinate with other systems'],
      },
    ],
    body: 'Together, they enable software that can work for us.',
  },
  {
    kind: 'diagram',
    eyebrow: "Today's architecture",
    title: 'Today we build the first layer: the brain.',
    nodes: [
      { label: 'Your application' },
      { label: 'Backend' },
      { label: 'Nebius Token Factory', detail: 'Model access' },
      { label: 'Large Language Model', detail: 'Reasoning' },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: "Today's workshop",
    title: 'By the end, your application can reason.',
    items: [
      'Clone the project template',
      'Configure the environment',
      'Get a Nebius Token Factory API key',
      'Connect the backend',
      'Make your first LLM request',
    ],
  },
  {
    kind: 'journey',
    eyebrow: 'The journey',
    title: 'Each workshop builds on the previous one.',
    rows: [
      { left: 'Reason', right: 'Workshop 1 - Give our application a brain.', active: true },
      { left: 'Act', right: 'Workshop 2 - Turn it into an agent.' },
      { left: 'Participate', right: 'Workshop 3 - Give the agent a job.' },
      { left: 'Create value', right: 'Workshop 4 - Let the agent get paid.' },
    ],
  },
  {
    kind: 'closing',
    eyebrow: 'Build mode',
    title: "Let's build.",
    subtitle: 'Open the template, connect the backend, and make the first LLM request.',
  },
];

const workshopTwoSlidesEs: PresentationSlide[] = [
  {
    kind: 'cover',
    eyebrow: 'Workshop 02',
    title: 'Lanza tu agente',
    subtitle: 'Convirtiendo inteligencia en acción.',
  },
  {
    kind: 'statement',
    eyebrow: 'La vez pasada',
    title: 'Le dimos cerebro a nuestra aplicación.',
    lines: [
      'Puede razonar.',
      'Hoy le enseñamos a trabajar.',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'Evolución del software',
    title: 'Hoy pasamos de razonar a actuar.',
    steps: [
      { code: '01', title: 'Cómputo', body: 'Ejecuta instrucciones.' },
      { code: '02', title: 'Razonar', body: 'Entiende y decide.' },
      { code: '03', title: 'Actuar', body: 'Usa herramientas y logra objetivos.', active: true },
      { code: '04', title: 'Participar', body: 'Coordina con otros sistemas.' },
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'LLMs no son agentes',
    title: 'Un LLM responde preguntas. Un agente cumple objetivos.',
    lines: [
      'La diferencia no es inteligencia.',
      'Es ejecución.',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Qué hace a un agente',
    title: 'Un agente produce resultados.',
    items: [
      'Persigue un objetivo',
      'Usa herramientas',
      'Lee y escribe archivos',
      'Interactúa con sistemas externos',
      'Itera hasta completar la tarea',
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'Runtime del agente',
    title: 'Un agente no trabaja solo.',
    lines: [
      'Opera dentro de un entorno con herramientas.',
      'Ese entorno le da todo lo necesario para ejecutar.',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Anatomía',
    title: 'El runtime convierte un modelo en un operador.',
    items: [
      'Modelo',
      'Contexto',
      'Skills',
      'Tools e integraciones',
      'Memoria',
      'Execution loops',
      'Guardrails',
      'Observabilidad',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Contratar a alguien',
    title: 'No basta con darle inteligencia. Hay que darle entorno.',
    columns: [
      {
        label: 'Un intern necesita',
        items: ['Trabajo', 'Documentación', 'Herramientas', 'Feedback', 'Límites', 'Metas'],
      },
      {
        label: 'Un agente necesita',
        items: ['Objetivo', 'Contexto', 'Integraciones', 'Permisos', 'Verificación', 'Observabilidad'],
      },
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Pi Coding Agent',
    title: 'Pi es un builder agent especializado.',
    body: 'Su trabajo es construir software. Es excelente construyendo, pero no pretende ser todo el sistema autónomo.',
    items: [
      'Escribe código',
      'Prueba',
      'Refactoriza',
      'Ejecuta comandos',
      'Itera',
    ],
  },
  {
    kind: 'diagram',
    eyebrow: 'Mapa de integración',
    title: 'Construimos la primera versión del entorno del agente.',
    nodes: [
      { label: 'Pi Coding Agent', detail: 'Builder' },
      { label: 'Nebius Token Factory', detail: 'Reasoning' },
      { label: 'Blockchain Wallet', detail: 'Identity' },
      { label: 'GitHub', detail: 'Code' },
      { label: 'Vercel', detail: 'Deployment' },
      { label: 'Telegram', detail: 'Communication' },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Build',
    title: 'Hoy conectamos las integraciones del agente.',
    items: [
      'Deploy Pi Coding Agent',
      'Connect Nebius Token Factory',
      'Create a blockchain wallet',
      'Connect GitHub',
      'Connect Vercel',
      'Connect Telegram',
    ],
  },
  {
    kind: 'journey',
    eyebrow: 'El camino',
    title: 'Cada workshop construye sobre el anterior.',
    rows: [
      { left: 'Razonar', right: 'Workshop 1 - Le dimos cerebro a la aplicación.' },
      { left: 'Actuar', right: 'Workshop 2 - La convertimos en agente.', active: true },
      { left: 'Participar', right: 'Workshop 3 - Le damos un trabajo al agente.' },
      { left: 'Crear valor', right: 'Workshop 4 - Dejamos que el agente cobre.' },
    ],
  },
  {
    kind: 'closing',
    eyebrow: 'Modo build',
    title: 'A construir.',
    subtitle: 'Instala Pi, conecta el servidor Hono y verifica cada integración.',
  },
];

const workshopTwoSlidesEn: PresentationSlide[] = [
  {
    kind: 'cover',
    eyebrow: 'Workshop 02',
    title: 'Launch Your Agent',
    subtitle: 'Turning intelligence into action.',
  },
  {
    kind: 'statement',
    eyebrow: 'Last time',
    title: 'We gave our application a brain.',
    lines: [
      'It can reason.',
      "Today, we'll teach it how to work.",
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'Software evolution',
    title: 'Today we move from reason to action.',
    steps: [
      { code: '01', title: 'Compute', body: 'Execute instructions.' },
      { code: '02', title: 'Reason', body: 'Understand and decide.' },
      { code: '03', title: 'Act', body: 'Use tools and accomplish goals.', active: true },
      { code: '04', title: 'Participate', body: 'Coordinate with external systems.' },
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'LLMs are not agents',
    title: 'An LLM answers questions. An agent accomplishes goals.',
    lines: [
      "The difference isn't intelligence.",
      "It's execution.",
    ],
  },
  {
    kind: 'list',
    eyebrow: 'What makes an agent?',
    title: 'An agent produces outcomes.',
    items: [
      'Pursue a goal',
      'Use tools',
      'Read and write files',
      'Interact with external systems',
      'Iterate until the task is complete',
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'The agent runtime',
    title: "An agent doesn't work alone.",
    lines: [
      'It operates inside an environment with tools.',
      'That environment gives it what it needs to execute.',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Anatomy',
    title: 'The runtime turns a model into an operator.',
    items: [
      'Model',
      'Context',
      'Skills',
      'Tools and integrations',
      'Memory',
      'Execution loops',
      'Guardrails',
      'Observability',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Hiring an intern',
    title: 'Intelligence is not enough. You need an operating environment.',
    columns: [
      {
        label: 'An intern needs',
        items: ['A job', 'Documentation', 'Tools', 'Feedback', 'Boundaries', 'Goals'],
      },
      {
        label: 'An agent needs',
        items: ['Objective', 'Context', 'Integrations', 'Permissions', 'Verification', 'Observability'],
      },
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Pi Coding Agent',
    title: 'Pi is a specialized builder agent.',
    body: "Its job is to build software. Pi is excellent at building, but it is not meant to run an entire autonomous system.",
    items: [
      'Write code',
      'Test',
      'Refactor',
      'Execute commands',
      'Iterate',
    ],
  },
  {
    kind: 'diagram',
    eyebrow: "Today's integration map",
    title: 'We are building the first version of the agent environment.',
    nodes: [
      { label: 'Pi Coding Agent', detail: 'Builder' },
      { label: 'Nebius Token Factory', detail: 'Reasoning' },
      { label: 'Blockchain Wallet', detail: 'Identity' },
      { label: 'GitHub', detail: 'Code' },
      { label: 'Vercel', detail: 'Deployment' },
      { label: 'Telegram', detail: 'Communication' },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Build',
    title: 'Today we connect the agent integrations.',
    items: [
      'Deploy Pi Coding Agent',
      'Connect Nebius Token Factory',
      'Create a blockchain wallet',
      'Connect GitHub',
      'Connect Vercel',
      'Connect Telegram',
    ],
  },
  {
    kind: 'journey',
    eyebrow: 'The journey',
    title: 'Each workshop builds on the previous one.',
    rows: [
      { left: 'Reason', right: 'Workshop 1 - Give our application a brain.' },
      { left: 'Act', right: 'Workshop 2 - Turn it into an agent.', active: true },
      { left: 'Participate', right: 'Workshop 3 - Give the agent a job.' },
      { left: 'Create value', right: 'Workshop 4 - Let the agent get paid.' },
    ],
  },
  {
    kind: 'closing',
    eyebrow: 'Build mode',
    title: "Let's build.",
    subtitle: 'Install Pi, connect the Hono server, and verify every integration.',
  },
];

const workshopThreeSlidesEs: PresentationSlide[] = [
  {
    kind: 'cover',
    eyebrow: 'Workshop 03',
    title: 'Dale un trabajo a tu agente',
    subtitle: 'Construyendo un servicio AI-native.',
  },
  {
    kind: 'statement',
    eyebrow: 'La vez pasada',
    title: 'La aplicación ya puede razonar y actuar.',
    lines: [
      'Le dimos un cerebro.',
      'La convertimos en agente.',
      'Hoy le damos un trabajo.',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'Evolución del software',
    title: 'Hoy pasamos de actuar a proveer valor.',
    steps: [
      { code: '01', title: 'Cómputo', body: 'Ejecuta instrucciones.' },
      { code: '02', title: 'Razonar', body: 'Entiende y decide.' },
      { code: '03', title: 'Actuar', body: 'Usa herramientas.' },
      { code: '04', title: 'Proveer valor', body: 'Resuelve un trabajo reusable.', active: true },
      { code: '05', title: 'Capturar valor', body: 'Cobra o autoriza ejecución.' },
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'Propósito',
    title: 'Un agente sin propósito es solo potencial.',
    lines: [
      'Un agente útil provee un servicio.',
      'El servicio necesita inputs claros y outputs valiosos.',
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Buen servicio de IA',
    title: 'La IA debe crear valor, no solo devolver datos.',
    items: [
      'Resuelve un problema real',
      'Tiene inputs claros',
      'Produce outputs valiosos',
      'Es reusable a través de una API',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'AI service pattern',
    title: 'Datos crudos se convierten en decisiones.',
    steps: [
      { code: 'IN', title: 'External Data', body: 'GitHub repository metadata.' },
      { code: 'AI', title: 'AI Reasoning', body: 'Nebius Token Factory.' },
      { code: 'OUT', title: 'Added Value', body: 'Insight, recommendations and action plan.', active: true },
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'Servicio',
    title: 'Conoce al AI Builder Mentor.',
    lines: [
      'Un mentor de IA para builders de software.',
      'Dale un repositorio de GitHub y te ayuda a convertirte en mejor engineer.',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Input',
    title: 'El mentor necesita contexto y meta.',
    items: [
      'GitHub repository',
      'Tu objetivo opcional',
      'Ejemplo: prepararme para una entrevista de Senior Solutions Architect',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Output',
    title: 'El mentor transforma información en orientación.',
    items: [
      'Entiende el proyecto',
      'Revisa la arquitectura',
      'Destaca fortalezas',
      'Identifica oportunidades',
      'Recomienda qué aprender',
      'Crea un plan de acción',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Por qué IA',
    title: 'GitHub da datos. El mentor da decisiones.',
    columns: [
      {
        label: 'GitHub',
        items: ['Repo', 'README', 'Lenguajes', 'Metadata'],
      },
      {
        label: 'Mentor',
        items: ['Insights', 'Recomendaciones', 'Plan personalizado'],
      },
    ],
  },
  {
    kind: 'diagram',
    eyebrow: 'Arquitectura',
    title: 'Builder Mentor API conecta datos externos con razonamiento.',
    nodes: [
      { label: 'User' },
      { label: 'Builder Mentor API' },
      { label: 'GitHub API', detail: 'External data' },
      { label: 'Nebius Token Factory', detail: 'AI reasoning' },
      { label: 'Structured Response', detail: 'Added value' },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Workshop de hoy',
    title: 'Al final, tu agente provee un servicio real.',
    items: [
      'Builder Mentor service',
      'GitHub integration',
      'AI reasoning with Nebius',
      'REST API',
    ],
  },
  {
    kind: 'journey',
    eyebrow: 'El camino',
    title: 'Cada workshop construye sobre el anterior.',
    rows: [
      { left: 'Razonar', right: 'Workshop 1 - Le dimos cerebro a la aplicación.' },
      { left: 'Actuar', right: 'Workshop 2 - La convertimos en agente.' },
      { left: 'Proveer valor', right: 'Workshop 3 - Le damos un trabajo.', active: true },
      { left: 'Capturar valor', right: 'Workshop 4 - Dejamos que el agente cobre.' },
    ],
  },
  {
    kind: 'closing',
    eyebrow: 'Modo build',
    title: 'A construir.',
    subtitle: 'Crea el Builder Mentor API, conecta GitHub y agrega razonamiento con Nebius.',
  },
];

const workshopThreeSlidesEn: PresentationSlide[] = [
  {
    kind: 'cover',
    eyebrow: 'Workshop 03',
    title: 'Give Your Agent a Job',
    subtitle: 'Building an AI-native service.',
  },
  {
    kind: 'statement',
    eyebrow: 'Last time',
    title: 'The application can reason and act.',
    lines: [
      'We gave it a brain.',
      'We turned it into an agent.',
      "Today, we'll give it a job.",
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'Software evolution',
    title: 'Today we move from acting to providing value.',
    steps: [
      { code: '01', title: 'Compute', body: 'Execute instructions.' },
      { code: '02', title: 'Reason', body: 'Understand and decide.' },
      { code: '03', title: 'Act', body: 'Use tools.' },
      { code: '04', title: 'Provide value', body: 'Solve a reusable job.', active: true },
      { code: '05', title: 'Capture value', body: 'Charge for or authorize execution.' },
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'Purpose',
    title: 'An agent without a purpose is just potential.',
    lines: [
      'A useful agent provides a service.',
      'The service needs clear inputs and valuable outputs.',
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Good AI service',
    title: 'AI should create value, not just return data.',
    items: [
      'Solve a real problem',
      'Have clear inputs',
      'Produce valuable outputs',
      'Be reusable through an API',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'AI service pattern',
    title: 'Raw data becomes decisions.',
    steps: [
      { code: 'IN', title: 'External Data', body: 'GitHub repository metadata.' },
      { code: 'AI', title: 'AI Reasoning', body: 'Nebius Token Factory.' },
      { code: 'OUT', title: 'Added Value', body: 'Insight, recommendations and action plan.', active: true },
    ],
  },
  {
    kind: 'statement',
    eyebrow: 'Service',
    title: 'Meet the AI Builder Mentor.',
    lines: [
      'An AI mentor for software builders.',
      'Give it a GitHub repository and it will help you become a better engineer.',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Input',
    title: 'The mentor needs context and a goal.',
    items: [
      'GitHub repository',
      'Your optional goal',
      'Example: help me prepare for a Senior Solutions Architect interview',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Output',
    title: 'The mentor turns information into guidance.',
    items: [
      'Understand the project',
      'Review the architecture',
      'Highlight strengths',
      'Identify improvement opportunities',
      'Recommend what to learn next',
      'Create an action plan',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Why AI',
    title: 'GitHub gives data. The mentor gives decisions.',
    columns: [
      {
        label: 'GitHub',
        items: ['Repo', 'README', 'Languages', 'Metadata'],
      },
      {
        label: 'Mentor',
        items: ['Insights', 'Recommendations', 'Personalized plan'],
      },
    ],
  },
  {
    kind: 'diagram',
    eyebrow: 'Architecture',
    title: 'Builder Mentor API connects external data with reasoning.',
    nodes: [
      { label: 'User' },
      { label: 'Builder Mentor API' },
      { label: 'GitHub API', detail: 'External data' },
      { label: 'Nebius Token Factory', detail: 'AI reasoning' },
      { label: 'Structured Response', detail: 'Added value' },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: "Today's workshop",
    title: 'By the end, your agent provides a real service.',
    items: [
      'Builder Mentor service',
      'GitHub integration',
      'AI reasoning with Nebius',
      'REST API',
    ],
  },
  {
    kind: 'journey',
    eyebrow: 'The journey',
    title: 'Each workshop builds on the previous one.',
    rows: [
      { left: 'Reason', right: 'Workshop 1 - Give our application a brain.' },
      { left: 'Act', right: 'Workshop 2 - Turn it into an agent.' },
      { left: 'Provide value', right: 'Workshop 3 - Give the agent a job.', active: true },
      { left: 'Capture value', right: 'Workshop 4 - Let the agent get paid.' },
    ],
  },
  {
    kind: 'closing',
    eyebrow: 'Build mode',
    title: "Let's build.",
    subtitle: 'Create the Builder Mentor API, connect GitHub, and add reasoning with Nebius.',
  },
];

const workshopRepoBase =
  'https://github.com/fruteroclub/aixb-day-workshops/blob/main/workshops';

export const workshopResources: WorkshopResource[] = [
  {
    number: '01',
    slug: '01-fundamentos-ia-x-blockchain',
    time: '12:00',
    title: {
      es: 'Fundamentos IA x Blockchain',
      en: 'AI x Blockchain Foundations',
    },
    summary: {
      es: 'Dale cerebro a la aplicación con un backend conectado a Nebius Token Factory.',
      en: 'Give the application a brain with a backend connected to Nebius Token Factory.',
    },
    artifact: {
      es: 'Presentación y primera request de razonamiento.',
      en: 'Presentation deck plus first reasoning request.',
    },
    presentationPath: {
      es: '/resources/workshops/01-fundamentos-ia-x-blockchain/presentation/',
      en: '/en/resources/workshops/01-fundamentos-ia-x-blockchain/presentation/',
    },
    guidePath: {
      es: `${workshopRepoBase}/01-fundamentos-ia-x-blockchain/README.md`,
      en: `${workshopRepoBase}/01-fundamentos-ia-x-blockchain/README.md`,
    },
    statuses: {
      presentation: 'ready',
      guide: 'ready',
      video: 'after-event',
      links: 'ready',
    },
    resourceLinks: [
      {
        label: { es: 'Repositorio de workshops', en: 'Workshop repository' },
        href: 'https://github.com/fruteroclub/aixb-day-workshops',
        description: { es: 'Fuente de guías, ejercicios y material de speakers.', en: 'Source for guides, exercises, and speaker material.' },
      },
      {
        label: { es: 'Hono para Node.js', en: 'Hono for Node.js' },
        href: 'https://hono.dev/docs/getting-started/nodejs',
        description: { es: 'Servidor usado en la guía técnica.', en: 'Server framework used in the technical guide.' },
      },
      {
        label: { es: 'Nebius Token Factory', en: 'Nebius Token Factory' },
        href: 'https://docs.tokenfactory.nebius.com/api-reference/introduction',
        description: { es: 'API OpenAI-compatible para razonamiento.', en: 'OpenAI-compatible API for reasoning.' },
      },
    ],
    slides: {
      es: workshopOneSlidesEs,
      en: workshopOneSlidesEn,
    },
  },
  {
    number: '02',
    slug: '02-lanza-tu-agente-mentor',
    time: '12:30',
    title: {
      es: 'Lanza tu propio Agente Mentor',
      en: 'Launch Your Agent',
    },
    summary: {
      es: 'Convierte razonamiento en acción con integraciones reales.',
      en: 'Turn reasoning into action with real integrations.',
    },
    artifact: {
      es: 'Pi Coding Agent + servidor Hono de integraciones.',
      en: 'Pi Coding Agent plus Hono integration server.',
    },
    presentationPath: {
      es: '/resources/workshops/02-lanza-tu-agente-mentor/presentation/',
      en: '/en/resources/workshops/02-lanza-tu-agente-mentor/presentation/',
    },
    guidePath: {
      es: `${workshopRepoBase}/02-lanza-tu-agente-mentor/README.md`,
      en: `${workshopRepoBase}/02-lanza-tu-agente-mentor/README.md`,
    },
    statuses: {
      presentation: 'ready',
      guide: 'ready',
      video: 'after-event',
      links: 'ready',
    },
    resourceLinks: [
      {
        label: { es: 'Pi Quickstart', en: 'Pi Quickstart' },
        href: 'https://pi.dev/docs/latest/quickstart',
        description: { es: 'Instalación, login, primera sesión y comandos básicos.', en: 'Install, login, first session, and basic commands.' },
      },
      {
        label: { es: 'Nebius Token Factory', en: 'Nebius Token Factory' },
        href: 'https://docs.tokenfactory.nebius.com/api-reference/introduction',
        description: { es: 'Conexión del modelo de razonamiento.', en: 'Reasoning model connection.' },
      },
      {
        label: { es: 'GitHub REST API', en: 'GitHub REST API' },
        href: 'https://docs.github.com/en/rest',
        description: { es: 'Metadata de repositorios para el agente.', en: 'Repository metadata for the agent.' },
      },
      {
        label: { es: 'Vercel CLI', en: 'Vercel CLI' },
        href: 'https://vercel.com/docs/cli',
        description: { es: 'Camino de deployment para el servidor de integraciones.', en: 'Deployment path for the integration server.' },
      },
      {
        label: { es: 'Telegram Bot API', en: 'Telegram Bot API' },
        href: 'https://core.telegram.org/bots/api',
        description: { es: 'Canal de comunicación para el agente.', en: 'Communication channel for the agent.' },
      },
    ],
    slides: {
      es: workshopTwoSlidesEs,
      en: workshopTwoSlidesEn,
    },
  },
  {
    number: '03',
    slug: '03-dale-un-trabajo-a-tu-agente',
    time: '13:00',
    title: {
      es: 'Dale un trabajo a tu Agente',
      en: 'Give Your Agent a Job',
    },
    summary: {
      es: 'Construye un Builder Mentor API con GitHub y Nebius.',
      en: 'Build a Builder Mentor API with GitHub and Nebius.',
    },
    artifact: {
      es: 'Builder Mentor API con GitHub integration y Nebius reasoning.',
      en: 'Builder Mentor API with GitHub integration and Nebius reasoning.',
    },
    presentationPath: {
      es: '/resources/workshops/03-dale-un-trabajo-a-tu-agente/presentation/',
      en: '/en/resources/workshops/03-dale-un-trabajo-a-tu-agente/presentation/',
    },
    guidePath: {
      es: `${workshopRepoBase}/03-dale-un-trabajo-a-tu-agente/README.md`,
      en: `${workshopRepoBase}/03-dale-un-trabajo-a-tu-agente/README.md`,
    },
    statuses: {
      presentation: 'ready',
      guide: 'ready',
      video: 'after-event',
      links: 'ready',
    },
    resourceLinks: [
      {
        label: { es: 'GitHub REST API', en: 'GitHub REST API' },
        href: 'https://docs.github.com/en/rest',
        description: { es: 'Fuente de metadata para el Builder Mentor.', en: 'Metadata source for the Builder Mentor.' },
      },
      {
        label: { es: 'Nebius Token Factory', en: 'Nebius Token Factory' },
        href: 'https://docs.tokenfactory.nebius.com/api-reference/introduction',
        description: { es: 'Capa de razonamiento del servicio.', en: 'Reasoning layer for the service.' },
      },
      {
        label: { es: 'Hono routing', en: 'Hono routing' },
        href: 'https://hono.dev/docs/api/routing',
        description: { es: 'Rutas del REST API.', en: 'Routes for the REST API.' },
      },
    ],
    slides: {
      es: workshopThreeSlidesEs,
      en: workshopThreeSlidesEn,
    },
  },
  {
    number: '04',
    slug: '04-agente-que-cobra',
    time: '13:30',
    title: {
      es: 'Un Agente que cobra por trabajo',
      en: 'An Agent That Charges for Work',
    },
    summary: {
      es: 'Agrega identidad, autorización de pago, ejecución y recibos.',
      en: 'Add identity, payment authorization, execution, and receipts.',
    },
    artifact: {
      es: 'Recursos para el flujo de agente pagado.',
      en: 'Paid-agent flow resources.',
    },
    guidePath: {
      es: `${workshopRepoBase}/04-agente-que-cobra/README.md`,
      en: `${workshopRepoBase}/04-agente-que-cobra/README.md`,
    },
    statuses: {
      presentation: 'planned',
      guide: 'ready',
      video: 'after-event',
      links: 'ready',
    },
    resourceLinks: [
      {
        label: { es: 'Repositorio de workshops', en: 'Workshop repository' },
        href: 'https://github.com/fruteroclub/aixb-day-workshops',
        description: { es: 'La guía del workshop 4 se completa cuando cierre la copy.', en: 'Workshop 4 guide will be completed when its copy is finalized.' },
      },
      {
        label: { es: 'Hono para Node.js', en: 'Hono for Node.js' },
        href: 'https://hono.dev/docs/getting-started/nodejs',
        description: { es: 'Base para el job API del agente.', en: 'Base for the agent job API.' },
      },
      {
        label: { es: 'Ethereum JSON-RPC', en: 'Ethereum JSON-RPC' },
        href: 'https://ethereum.org/en/developers/docs/apis/json-rpc/',
        description: { es: 'Referencia para pagos, receipts y verificación si se activa testnet.', en: 'Reference for payments, receipts, and verification if testnet is enabled.' },
      },
    ],
  },
];

export function getWorkshopBySlug(slug: string): WorkshopResource | undefined {
  return workshopResources.find((workshop) => workshop.slug === slug);
}

export function getWorkshopCopy(workshop: WorkshopResource, locale: WorkshopLocale) {
  return {
    title: workshop.title[locale],
    summary: workshop.summary[locale],
    artifact: workshop.artifact[locale],
  };
}

export function getWorkshopPresentationPath(workshop: WorkshopResource, locale: WorkshopLocale): string | undefined {
  return workshop.presentationPath?.[locale];
}

export function getWorkshopGuidePath(workshop: WorkshopResource, locale: WorkshopLocale): string | undefined {
  return workshop.guidePath?.[locale];
}

export function getWorkshopSlides(workshop: WorkshopResource, locale: WorkshopLocale): PresentationSlide[] | undefined {
  return workshop.slides?.[locale];
}
