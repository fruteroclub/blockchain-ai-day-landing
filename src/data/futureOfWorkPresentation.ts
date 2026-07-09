import type { PresentationSlide, WorkshopLocale } from './workshops';

export type TalkLocale = WorkshopLocale;

type Localized<T> = Record<TalkLocale, T>;

export type StandalonePresentation = {
  slug: string;
  paths: Localized<string>;
  copy: Localized<{
    title: string;
    subtitle: string;
    description: string;
    sessionLabel: string;
    timeLabel: string;
    eventLabel: string;
    locationLabel: string;
    backLabel: string;
  }>;
  slides: Localized<PresentationSlide[]>;
};

const futureOfWorkSlidesEs: PresentationSlide[] = [
  {
    kind: 'cover',
    eyebrow: 'Main Stage',
    title: 'Cómo prepararte para el futuro del trabajo',
    subtitle: 'Agentes, workflows, marketplaces y el puente entre AI x Blockchain',
    body: 'AI x Blockchain Day / Ciudad de México',
  },
  {
    kind: 'statement',
    eyebrow: 'La tesis',
    title: 'El futuro del trabajo no es solo personas usando herramientas de AI.',
    subtitle: 'Es el trabajo volviéndose programable.',
    lines: [
      'Las personas no solo van a operar software.',
      'Van a diseñar, supervisar y participar en workflows agénticos.',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'El cambio',
    title: 'La interfaz se está moviendo de botones a intención.',
    columns: [
      {
        label: 'Antes',
        items: [
          'Abrir la app',
          'Mover los datos',
          'Hacer click en botones',
          'Exportar el archivo',
          'Mandar la actualización',
        ],
      },
      {
        label: 'Ahora',
        items: [
          'Definir el objetivo',
          'Dar contexto',
          'Poner restricciones',
          'Revisar el output',
          'Aprobar el riesgo',
        ],
      },
    ],
    body: 'El lenguaje se volvió una interfaz para el trabajo.',
  },
  {
    kind: 'statement',
    eyebrow: 'Trabajo ejecutable',
    title: 'Si el software puede entender el trabajo, el trabajo puede empaquetarse en sistemas repetibles.',
    lines: [
      'Una tarea se vuelve un proceso.',
      'Un proceso se vuelve un workflow.',
      'Un workflow se vuelve una capacidad ejecutable.',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'De chatbot a agente',
    title: 'No todo sistema de AI es un agente.',
    steps: [
      { code: '01', title: 'Chatbot', body: 'Responde preguntas.' },
      { code: '02', title: 'Copilot', body: 'Asiste a una persona mientras trabaja.' },
      {
        code: '03',
        title: 'Agente',
        body: 'Toma un objetivo, usa herramientas, revisa estado y avanza trabajo dentro de restricciones.',
        active: true,
      },
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Nuevo rol humano',
    title: 'Los agentes ejecutan más. La persona sube en el stack.',
    columns: [
      {
        label: 'El agente puede',
        items: [
          'Entender una tarea',
          'Dividirla en pasos',
          'Usar herramientas y APIs',
          'Leer y escribir archivos',
          'Producir artefactos',
          'Pedir aprobación cuando hay riesgo',
        ],
      },
      {
        label: 'La persona pasa a',
        items: [
          'Definir objetivos',
          'Establecer estándares',
          'Revisar outputs',
          'Aprobar riesgos',
          'Mejorar el sistema',
          'Dirigir sistemas de trabajo',
        ],
      },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Ejemplo',
    title: 'Un objetivo. Muchos pasos.',
    body: '"Prepara una propuesta para cliente" puede convertirse en un workflow agéntico.',
    items: [
      'Reunir contexto del cliente',
      'Investigar la empresa',
      'Identificar el problema',
      'Redactar alcance',
      'Estimar esfuerzo',
      'Preparar documento comercial',
      'Enrutar para aprobación humana',
      'Enviar solo después de aprobación',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Workflows',
    title: 'Los workflows hacen útiles a los agentes.',
    body: 'El valor no está en una respuesta de AI. Está en un sistema repetible que produce mejor trabajo con el tiempo.',
    items: [
      'Reducir ambigüedad',
      'Definir inputs y outputs',
      'Medir calidad',
      'Agregar checkpoints humanos',
      'Coordinar handoffs',
      'Repetir lo que funciona',
      'Mejorar el sistema con el tiempo',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Dónde aparece',
    title: 'Cualquier trabajo repetido puede volverse candidato.',
    items: [
      'Calificación de leads',
      'Triage de soporte',
      'Memos de investigación',
      'Code review',
      'Intake legal',
      'Conciliación de facturas',
      'Pipelines de hiring',
      'Operaciones de comunidad',
      'Monitoreo de transacciones onchain',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Nueva habilidad profesional',
    title: 'La nueva habilidad es diseñar trabajo para agentes.',
    items: [
      'Descomponer tareas',
      'Especificar outputs',
      'Elegir herramientas',
      'Crear gates de revisión',
      'Evaluar trabajo hecho por AI',
      'Mejorar workflows',
      'Empaquetar capacidades',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'De jobs a capacidades',
    title: 'El trabajo se está volviendo modular.',
    steps: [
      { code: 'JOB', title: 'Job', body: 'Un rol amplio.' },
      { code: 'TASK', title: 'Tarea', body: 'Una unidad específica de trabajo.' },
      { code: 'FLOW', title: 'Workflow', body: 'Un proceso repetible.' },
      { code: 'SVC', title: 'Servicio agéntico', body: 'Una capacidad ejecutable.', active: true },
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Marketplaces',
    title: 'Marketplaces venden outcomes.',
    body: 'La gente no compra "AI". Compra resultados confiables.',
    columns: [
      {
        label: 'Pueden vender',
        items: [
          'Expertise humano',
          'Agentes de AI',
          'Templates de workflows',
          'Datos, APIs y herramientas',
          'Verificación y reputación',
        ],
      },
      {
        label: 'La gente compra',
        items: [
          'Leads calificados',
          'Reportes investigados',
          'Contratos revisados',
          'Flujos de soporte automatizados',
          'Apalancamiento operativo',
        ],
      },
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Confianza',
    title: 'Si los agentes trabajan a través de marketplaces, necesitamos infraestructura de confianza.',
    items: [
      '¿Quién hizo el trabajo?',
      '¿Qué datos se usaron?',
      '¿Qué cambió?',
      '¿El output fue aprobado?',
      '¿Quién recibe el pago?',
      '¿Qué reputación sigue al trabajo?',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'AI x Blockchain',
    title: 'AI da capacidad. Blockchain da garantías.',
    columns: [
      {
        label: 'AI da capacidad',
        items: ['Generar', 'Decidir', 'Actuar', 'Automatizar'],
      },
      {
        label: 'Blockchain da garantías',
        items: ['Verificar', 'Registrar', 'Poseer', 'Pagar', 'Coordinar'],
      },
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'Los cuatro puentes',
    title: 'Identidad, procedencia, pagos y coordinación.',
    steps: [
      { code: 'ID', title: 'Identidad', body: '¿Qué humano, empresa o agente realizó la acción?' },
      { code: 'PROV', title: 'Procedencia', body: '¿De dónde vinieron los datos o el output?' },
      { code: 'PAY', title: 'Pagos', body: '¿Cómo cobra o recibe pagos un agente?', active: true },
      { code: 'COORD', title: 'Coordinación', body: '¿Cómo confían varias partes en un estado compartido?' },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Comercio agéntico',
    title: 'Ejemplo: agente de investigación con AI',
    items: [
      'Un cliente solicita un reporte',
      'El agente reúne fuentes',
      'El agente produce el reporte',
      'Se adjunta procedencia',
      'Se registra aprobación humana',
      'El pago se liquida vía wallet o contrato',
      'La reputación sigue al trabajo completado',
      'El workflow puede reutilizarse o venderse',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Cómo prepararte',
    title: 'No intentes adivinar cada job title. Construye capacidades que sobreviven la transición.',
    columns: [
      {
        label: 'Skill stack',
        items: [
          'AI literacy',
          'Diseño de workflows',
          'Pensamiento en herramientas y APIs',
          'Criterio sobre datos',
          'Fundamentos de blockchain',
          'Empaquetamiento de servicios',
        ],
      },
      {
        label: 'Qué practicar ahora',
        items: [
          'Elige un proceso repetido',
          'Conviértelo en checklist',
          'Convierte el checklist en workflow',
          'Conecta AI y un gate de revisión',
          'Agrega confianza donde importe',
        ],
      },
    ],
  },
  {
    kind: 'closing',
    eyebrow: 'Tesis de cierre',
    title: 'Las personas que ganan no son las que solo usan AI.',
    subtitle: 'Son las que aprenden a diseñar trabajo para AI, verificarlo con sistemas confiables y empaquetarlo en servicios útiles.',
  },
];

const futureOfWorkSlidesEn: PresentationSlide[] = [
  {
    kind: 'cover',
    eyebrow: 'Main Stage',
    title: 'How to Prepare for the Future of Work',
    subtitle: 'Agents, workflows, marketplaces, and the AI x Blockchain bridge',
    body: 'AI x Blockchain Day / Mexico City',
  },
  {
    kind: 'statement',
    eyebrow: 'The thesis',
    title: 'The future of work is not just people using AI tools.',
    subtitle: 'It is work becoming programmable.',
    lines: [
      'People will not only operate software.',
      'People will design, supervise, and participate in agentic workflows.',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'The shift',
    title: 'The interface is moving from buttons to intent.',
    columns: [
      {
        label: 'Before',
        items: [
          'Open the app',
          'Move the data',
          'Click the buttons',
          'Export the file',
          'Send the update',
        ],
      },
      {
        label: 'Now',
        items: [
          'Define the goal',
          'Provide context',
          'Set constraints',
          'Review the output',
          'Approve the risk',
        ],
      },
    ],
    body: 'Language became an interface for work.',
  },
  {
    kind: 'statement',
    eyebrow: 'Executable work',
    title: 'If software can understand work, work can be packaged into repeatable systems.',
    lines: [
      'A task becomes a process.',
      'A process becomes a workflow.',
      'A workflow becomes an executable capability.',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'From chatbot to agent',
    title: 'Not every AI system is an agent.',
    steps: [
      { code: '01', title: 'Chatbot', body: 'Answers questions.' },
      { code: '02', title: 'Copilot', body: 'Assists a human while they work.' },
      {
        code: '03',
        title: 'Agent',
        body: 'Takes a goal, uses tools, checks state, and moves work forward within constraints.',
        active: true,
      },
    ],
  },
  {
    kind: 'split',
    eyebrow: 'New human role',
    title: 'Agents execute more. The human moves up the stack.',
    columns: [
      {
        label: 'The agent can',
        items: [
          'Understand a task',
          'Break it into steps',
          'Use tools and APIs',
          'Read and write files',
          'Produce artifacts',
          'Ask for approval when risk is high',
        ],
      },
      {
        label: 'The person moves to',
        items: [
          'Defining goals',
          'Setting standards',
          'Reviewing outputs',
          'Approving risk',
          'Improving the system',
          'Directing systems of work',
        ],
      },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Example',
    title: 'One goal. Many steps.',
    body: '"Prepare a client proposal" can become an agentic workflow.',
    items: [
      'Gather client context',
      'Research the company',
      'Identify the problem',
      'Draft scope',
      'Estimate effort',
      'Prepare commercial document',
      'Route for human approval',
      'Send only after approval',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Workflows',
    title: 'Workflows make agents useful.',
    body: 'The value is not one AI answer. It is a repeatable system that produces better work over time.',
    items: [
      'Reduce ambiguity',
      'Define inputs and outputs',
      'Measure quality',
      'Add human checkpoints',
      'Coordinate handoffs',
      'Repeat what works',
      'Improve the system over time',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Where this shows up',
    title: 'Any repeated work can become a candidate.',
    items: [
      'Sales qualification',
      'Support triage',
      'Research memos',
      'Code review',
      'Legal intake',
      'Invoice reconciliation',
      'Hiring pipelines',
      'Community operations',
      'Onchain transaction monitoring',
    ],
  },
  {
    kind: 'list',
    eyebrow: 'The new professional skill',
    title: 'The new skill is designing work for agents.',
    items: [
      'Decompose tasks',
      'Specify outputs',
      'Choose tools',
      'Create review gates',
      'Evaluate AI work',
      'Improve workflows',
      'Package capabilities',
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'From jobs to capabilities',
    title: 'Work is becoming modular.',
    steps: [
      { code: 'JOB', title: 'Job', body: 'A broad role.' },
      { code: 'TASK', title: 'Task', body: 'A specific unit of work.' },
      { code: 'FLOW', title: 'Workflow', body: 'A repeatable process.' },
      { code: 'SVC', title: 'Agent service', body: 'An executable capability.', active: true },
    ],
  },
  {
    kind: 'split',
    eyebrow: 'Marketplaces',
    title: 'Marketplaces sell outcomes.',
    body: 'People do not buy "AI". They buy reliable results.',
    columns: [
      {
        label: 'They may sell',
        items: [
          'Human expertise',
          'AI agents',
          'Workflow templates',
          'Data, APIs, and tools',
          'Verification and reputation',
        ],
      },
      {
        label: 'People buy',
        items: [
          'Qualified leads',
          'Researched reports',
          'Reviewed contracts',
          'Automated support flows',
          'Operational leverage',
        ],
      },
    ],
  },
  {
    kind: 'list',
    eyebrow: 'Trust',
    title: 'If agents do work across marketplaces, we need trust infrastructure.',
    items: [
      'Who performed the work?',
      'What data was used?',
      'What changed?',
      'Was the output approved?',
      'Who gets paid?',
      'What reputation follows the work?',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'AI x Blockchain',
    title: 'AI gives capability. Blockchain gives guarantees.',
    columns: [
      {
        label: 'AI gives capability',
        items: ['Generate', 'Decide', 'Act', 'Automate'],
      },
      {
        label: 'Blockchain gives guarantees',
        items: ['Verify', 'Record', 'Own', 'Pay', 'Coordinate'],
      },
    ],
  },
  {
    kind: 'sequence',
    eyebrow: 'The four bridges',
    title: 'Identity, provenance, payments, and coordination.',
    steps: [
      { code: 'ID', title: 'Identity', body: 'Which human, company, or agent performed the action?' },
      { code: 'PROV', title: 'Provenance', body: 'Where did the data or output come from?' },
      { code: 'PAY', title: 'Payments', body: 'How does an agent charge or receive payment?', active: true },
      { code: 'COORD', title: 'Coordination', body: 'How do multiple parties trust shared state?' },
    ],
  },
  {
    kind: 'checklist',
    eyebrow: 'Agentic commerce',
    title: 'Example: AI research agent',
    items: [
      'A client requests a report',
      'The agent gathers sources',
      'The agent produces the report',
      'Provenance is attached',
      'Human approval is recorded',
      'Payment is settled through a wallet or contract',
      'Reputation follows the completed work',
      'The workflow can be reused or sold',
    ],
  },
  {
    kind: 'split',
    eyebrow: 'How to prepare',
    title: 'Do not guess every future job title. Build capabilities that survive the transition.',
    columns: [
      {
        label: 'Skill stack',
        items: [
          'AI literacy',
          'Workflow design',
          'Tool and API thinking',
          'Data judgment',
          'Blockchain fundamentals',
          'Service packaging',
        ],
      },
      {
        label: 'What to practice now',
        items: [
          'Pick one repeated process',
          'Turn it into a checklist',
          'Turn the checklist into a workflow',
          'Connect AI and a review gate',
          'Add trust where it matters',
        ],
      },
    ],
  },
  {
    kind: 'closing',
    eyebrow: 'Closing thesis',
    title: 'The people who win are not the ones who only use AI.',
    subtitle: 'They are the ones who learn to design work for AI, verify it with trustworthy systems, and package it into useful services.',
  },
];

export const futureOfWorkPresentation: StandalonePresentation = {
  slug: 'future-of-work',
  paths: {
    es: '/presentaciones/futuro-del-trabajo/',
    en: '/en/presentations/future-of-work/',
  },
  copy: {
    es: {
      title: 'Cómo prepararte para el futuro del trabajo',
      subtitle: 'Agentes, workflows, marketplaces y el puente entre AI x Blockchain',
      description:
        'Presentación main stage de AI x Blockchain Day sobre agentes, workflows, marketplaces y confianza para el futuro del trabajo.',
      sessionLabel: 'Main Stage',
      timeLabel: '25 min',
      eventLabel: 'AI x Blockchain Day',
      locationLabel: 'Ciudad de México',
      backLabel: 'Volver a AI x Blockchain Day',
    },
    en: {
      title: 'How to Prepare for the Future of Work',
      subtitle: 'Agents, workflows, marketplaces, and the AI x Blockchain bridge',
      description:
        'AI x Blockchain Day main stage presentation on agents, workflows, marketplaces, and trust infrastructure for the future of work.',
      sessionLabel: 'Main Stage',
      timeLabel: '25 min',
      eventLabel: 'AI x Blockchain Day',
      locationLabel: 'Mexico City',
      backLabel: 'Back to AI x Blockchain Day',
    },
  },
  slides: {
    es: futureOfWorkSlidesEs,
    en: futureOfWorkSlidesEn,
  },
};

export function getFutureOfWorkCopy(lang: TalkLocale) {
  return futureOfWorkPresentation.copy[lang];
}

export function getFutureOfWorkSlides(lang: TalkLocale) {
  return futureOfWorkPresentation.slides[lang];
}
