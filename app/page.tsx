"use client";

import { useMemo, useState } from "react";

const tabs = [
  {
    id: "professor",
    label: "Visão por Professor",
    title: "Insights personalizados para cada professor",
    description:
      "Mapeie a jornada pedagógica de cada docente, acompanhe desempenho, engajamento e pontos de atenção em tempo real.",
    features: [
      {
        title: "Painéis dinâmicos",
        text: "Visualização de progresso baseada em metas, turnos e disciplinas com alertas inteligentes.",
      },
      {
        title: "Recomendações acionáveis",
        text: "Sugestões automáticas de ações formativas e materiais de apoio conforme gaps identificados.",
      },
      {
        title: "Feedback contínuo",
        text: "Colete e organize feedback dos alunos para calibrar estratégias de ensino e acompanhar evolução.",
      },
    ],
    metrics: [
      {
        value: "+42%",
        label: "Melhora na adesão aos planos de aula",
      },
      {
        value: "3x",
        label: "Mais interações qualificadas entre equipe pedagógica",
      },
    ],
  },
  {
    id: "turma",
    label: "Visão por Turma",
    title: "Um olhar completo sobre cada turma",
    description:
      "Combine indicadores acadêmicos e socioemocionais para planejar intervenções e celebrar conquistas coletivas.",
    features: [
      {
        title: "Mapas de calor",
        text: "Identifique padrões de aprendizagem com mapas interativos e segmentação por grupo ou período.",
      },
      {
        title: "Trilhas de evolução",
        text: "Acompanhe a trajetória da turma ao longo do ano com checkpoints automáticos e metas sugeridas.",
      },
      {
        title: "Campanhas de engajamento",
        text: "Ative comunicações multicanal com famílias e alunos baseadas em eventos relevantes.",
      },
    ],
    metrics: [
      {
        value: "95%",
        label: "Turmas com planos de ação validados",
      },
      {
        value: "-38%",
        label: "Redução de evasão em períodos críticos",
      },
    ],
  },
  {
    id: "migracao",
    label: "Ferramentas de Migração",
    title: "Tecnologia sem atrito para migração de dados",
    description:
      "Conecte sistemas legados, normalize históricos e garanta integridade dos dados com nossa suíte de migração.",
    features: [
      {
        title: "Conectores plug & play",
        text: "Integração pronta com os principais ERPs educacionais e bases customizadas.",
      },
      {
        title: "Orquestração confiável",
        text: "Fluxos automatizados com monitoramento em tempo real e alertas de consistência.",
      },
      {
        title: "Governança de dados",
        text: "Crie políticas, versões e trilhas de auditoria para manter compliance durante a migração.",
      },
    ],
    metrics: [
      {
        value: "< 7 dias",
        label: "Tempo médio para migrar escolas completas",
      },
      {
        value: "99.98%",
        label: "Disponibilidade dos pipelines de importação",
      },
    ],
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

const tabLookup: Record<TabId, (typeof tabs)[number]> = tabs.reduce(
  (acc, tab) => {
    acc[tab.id] = tab;
    return acc;
  },
  {} as Record<TabId, (typeof tabs)[number]>
);

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>("professor");

  const tabContent = useMemo(() => tabLookup[activeTab], [activeTab]);

  return (
    <div className="container">
      <header className="hero">
        <h1>Transforme a gestão pedagógica com uma visão integrada</h1>
        <p>
          A plataforma que conecta dados, pessoas e estratégias para potencializar resultados
          acadêmicos em toda a rede.
        </p>
      </header>

      <main className="main">
        <nav className="tabs" aria-label="Seletor de visões">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${tab.id === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              aria-pressed={tab.id === activeTab}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <section className="tab-panel" aria-live="polite">
          <div className="panel-header">
            <h2>{tabContent.title}</h2>
            <p>{tabContent.description}</p>
          </div>
          <div className="feature-grid">
            {tabContent.features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
          <div className="metrics">
            {tabContent.metrics.map((metric) => (
              <div key={metric.label} className="metric">
                <h3>{metric.value}</h3>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="cta">
            <a href="#contato">Agendar demonstração</a>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Plataforma Educacional. Todos os direitos reservados.
      </footer>
    </div>
  );
}
