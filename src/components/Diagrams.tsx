const surface = "var(--surface)";
const line = "var(--line)";
const ink = "var(--ink)";
const muted = "var(--muted)";
const accent = "var(--accent)";
const accentSoft = "var(--accent-soft)";

function Arrow({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={muted} />
      </marker>
    </defs>
  );
}

function Frame({ children, viewBox, label }: { children: React.ReactNode; viewBox: string; label: string }) {
  return (
    <figure className="my-7 overflow-x-auto rounded-xl border p-4 sm:p-6" style={{ borderColor: line, background: "var(--surface-2)" }}>
      <svg viewBox={viewBox} role="img" aria-label={label} className="w-full min-w-[640px]" style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </svg>
    </figure>
  );
}

/* ---------- Offline sync (Okelcor Partner) ---------- */
export function SyncDiagram() {
  return (
    <Frame
      viewBox="0 0 760 250"
      label="A sale is written to an IndexedDB outbox on the phone with a client-generated ID, retried over an unreliable connection, and deduplicated by that ID on the server so repeated attempts write only one row."
    >
      <Arrow id="ar-sync" />

      {/* Phone */}
      <rect x="8" y="46" width="212" height="150" rx="12" fill={surface} stroke={line} />
      <text x="24" y="72" fontSize="12" fontWeight="600" fill={ink}>Partner phone · Accra</text>
      <rect x="24" y="86" width="180" height="34" rx="7" fill={accentSoft} stroke={accent} />
      <text x="36" y="107" fontSize="11.5" fill={ink} fontFamily="var(--font-mono)">sale + clientId</text>
      <text x="24" y="140" fontSize="11" fill={muted}>IndexedDB outbox</text>
      <rect x="24" y="150" width="40" height="26" rx="5" fill={surface} stroke={line} />
      <rect x="70" y="150" width="40" height="26" rx="5" fill={surface} stroke={line} />
      <rect x="116" y="150" width="40" height="26" rx="5" fill={surface} stroke={line} />
      <text x="166" y="168" fontSize="11" fill={muted}>queued</text>

      {/* Network */}
      <line x1="228" y1="121" x2="296" y2="121" stroke={muted} strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#ar-sync)" />
      <text x="230" y="108" fontSize="10.5" fill={muted}>3G, patchy</text>

      {/* Retry */}
      <rect x="304" y="82" width="150" height="78" rx="12" fill={surface} stroke={line} />
      <text x="320" y="108" fontSize="12" fontWeight="600" fill={ink}>Sync worker</text>
      <path d="M 322 134 a 14 14 0 1 0 14 -14" fill="none" stroke={accent} strokeWidth="1.6" markerEnd="url(#ar-sync)" />
      <text x="358" y="139" fontSize="11" fill={accent} fontFamily="var(--font-mono)">retry ×4</text>

      <line x1="462" y1="121" x2="520" y2="121" stroke={muted} strokeWidth="1.5" markerEnd="url(#ar-sync)" />

      {/* Server */}
      <rect x="528" y="46" width="224" height="150" rx="12" fill={surface} stroke={line} />
      <text x="544" y="72" fontSize="12" fontWeight="600" fill={ink}>API</text>
      <rect x="544" y="86" width="192" height="34" rx="7" fill={accentSoft} stroke={accent} />
      <text x="556" y="107" fontSize="11.5" fill={ink} fontFamily="var(--font-mono)">dedupe on clientId</text>
      <rect x="544" y="134" width="192" height="42" rx="7" fill={surface} stroke={line} />
      <text x="556" y="151" fontSize="11" fill={muted}>sales table</text>
      <text x="556" y="167" fontSize="11.5" fontWeight="600" fill={ink}>1 row written</text>

      <text x="8" y="228" fontSize="11.5" fill={muted}>
        Four attempts, one sale. The ID is created on the device before the first send, so the server can always tell a retry from a new sale.
      </text>
    </Frame>
  );
}

/* ---------- Multi-tenant platform (Century Cinemax) ---------- */
export function TenancyDiagram() {
  const modules = ["catalog", "scheduling", "pricing", "seating", "booking", "payments", "+11 more"];
  return (
    <Frame
      viewBox="0 0 760 300"
      label="Multiple cinema tenants share one Laravel platform of seventeen bounded modules, which serves a low-bandwidth customer site, an offline point-of-sale console, and queued integrations for tax fiscalization and Mobile Money."
    >
      <Arrow id="ar-ten" />

      {/* Tenants */}
      <rect x="8" y="8" width="230" height="40" rx="9" fill={accentSoft} stroke={accent} />
      <text x="24" y="33" fontSize="12" fontWeight="600" fill={ink}>Century Cinemax · tenant 1</text>
      <rect x="254" y="8" width="150" height="40" rx="9" fill={surface} stroke={line} strokeDasharray="5 4" />
      <text x="270" y="33" fontSize="12" fill={muted}>tenant 2</text>
      <rect x="420" y="8" width="150" height="40" rx="9" fill={surface} stroke={line} strokeDasharray="5 4" />
      <text x="436" y="33" fontSize="12" fill={muted}>tenant 3</text>
      <text x="588" y="33" fontSize="11" fill={muted}>white-label</text>

      <line x1="290" y1="52" x2="290" y2="82" stroke={muted} strokeWidth="1.5" markerEnd="url(#ar-ten)" />

      {/* Platform */}
      <rect x="8" y="88" width="744" height="96" rx="12" fill={surface} stroke={line} />
      <text x="24" y="114" fontSize="12.5" fontWeight="600" fill={ink}>Shared platform · Laravel, 17 bounded modules</text>
      <text x="736" y="114" fontSize="10.5" fill={muted} textAnchor="end">boundaries enforced in CI</text>
      {modules.map((m, i) => (
        <g key={m}>
          <rect x={24 + i * 102} y={130} width="92" height="30" rx="6" fill="var(--surface-2)" stroke={line} />
          <text x={70 + i * 102} y={149} fontSize="10.5" fill={muted} textAnchor="middle" fontFamily="var(--font-mono)">{m}</text>
        </g>
      ))}

      <line x1="130" y1="188" x2="130" y2="216" stroke={muted} strokeWidth="1.5" markerEnd="url(#ar-ten)" />
      <line x1="380" y1="188" x2="380" y2="216" stroke={muted} strokeWidth="1.5" markerEnd="url(#ar-ten)" />
      <line x1="630" y1="188" x2="630" y2="216" stroke={muted} strokeWidth="1.5" markerEnd="url(#ar-ten)" />

      {/* Consumers */}
      <rect x="8" y="222" width="244" height="58" rx="11" fill={surface} stroke={line} />
      <text x="24" y="245" fontSize="12" fontWeight="600" fill={ink}>Customer web</text>
      <text x="24" y="264" fontSize="11" fill={muted}>server-rendered, tuned for 3G</text>

      <rect x="258" y="222" width="244" height="58" rx="11" fill={surface} stroke={line} />
      <text x="274" y="245" fontSize="12" fontWeight="600" fill={ink}>POS &amp; scanner console</text>
      <text x="274" y="264" fontSize="11" fill={muted}>keeps selling offline, outbox syncs later</text>

      <rect x="508" y="222" width="244" height="58" rx="11" fill={accentSoft} stroke={accent} />
      <text x="524" y="245" fontSize="12" fontWeight="600" fill={ink}>Queued integrations</text>
      <text x="524" y="264" fontSize="11" fill={muted}>EFRIS fiscalization · Mobile Money</text>
    </Frame>
  );
}

/* ---------- On-device clinical engine (WellaPath) ---------- */
export function ClinicalDiagram() {
  const steps = [
    { x: 8, w: 116, label: "Answers" },
    { x: 148, w: 158, label: "Red-flag evaluator" },
    { x: 330, w: 140, label: "Scoring engine" },
    { x: 494, w: 118, label: "Urgency" },
    { x: 636, w: 116, label: "Guidance" },
  ];
  return (
    <Frame
      viewBox="0 0 760 220"
      label="Assessment answers pass through a red-flag evaluator, scoring engine and urgency determiner before guidance is shown. A red flag bypasses scoring entirely. The whole pipeline runs on the device."
    >
      <Arrow id="ar-clin" />

      {steps.map((s, i) => (
        <g key={s.label}>
          <rect
            x={s.x}
            y={86}
            width={s.w}
            height={54}
            rx={11}
            fill={i === 1 ? accentSoft : surface}
            stroke={i === 1 ? accent : line}
          />
          <text x={s.x + s.w / 2} y={118} fontSize="12" fontWeight={i === 1 ? "600" : "500"} fill={ink} textAnchor="middle">
            {s.label}
          </text>
          {i < steps.length - 1 && (
            <line
              x1={s.x + s.w + 4}
              y1={113}
              x2={steps[i + 1].x - 6}
              y2={113}
              stroke={muted}
              strokeWidth="1.5"
              markerEnd="url(#ar-clin)"
            />
          )}
        </g>
      ))}

      {/* Override path */}
      <path
        d="M 227 86 L 227 42 L 694 42 L 694 82"
        fill="none"
        stroke={accent}
        strokeWidth="1.8"
        markerEnd="url(#ar-clin)"
      />
      <rect x="366" y="26" width="222" height="32" rx="7" fill="var(--surface-2)" stroke={accent} />
      <text x="477" y="47" fontSize="11.5" fontWeight="600" fill={ink} textAnchor="middle">
        a red flag overrides the score
      </text>

      <text x="8" y="180" fontSize="11.5" fill={muted}>
        The whole pipeline runs on the device. No patient data is transmitted, and the app boots from cached config when there is no network.
      </text>
      <text x="8" y="202" fontSize="11.5" fill={muted}>
        Guidance is phrased as an action to take, never as a diagnosis. A linter blocks diagnostic wording before it can ship.
      </text>
    </Frame>
  );
}

export const diagrams = {
  sync: SyncDiagram,
  tenancy: TenancyDiagram,
  clinical: ClinicalDiagram,
};
