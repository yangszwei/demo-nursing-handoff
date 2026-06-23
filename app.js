const seedPatients = [
  {
    id: "701-2",
    name: "陳 O 芳",
    age: 76,
    diagnosis: "肺炎併低血氧",
    nurse: "王護理師",
    risk: "high",
    confirmed: false,
    vitals: "SpO₂ 91%",
    vitalTrend: "近 6 小時下降 4%",
    labs: "WBC 15.2",
    labTrend: "CRP 上升，培養待回",
    meds: "抗生素 D2",
    medTrend: "高警訊：氧氣治療調整",
    draft:
      "病人肺炎治療中，近 6 小時 SpO₂ 由 95% 下降至 91%，目前鼻導管氧氣 3 L/min。WBC 15.2、CRP 持續上升，血液培養待回。請接班後優先確認呼吸型態、氧氣需求與抗生素給藥時間，若 SpO₂ 持續低於 92% 請依病房流程通知醫師。",
    timeline: [
      ["21:10", "SpO₂ 下降", "連續兩筆低於 92%，規則引擎標示需優先確認。"],
      ["19:35", "CRP 趨勢上升", "由 8.1 上升至 13.4，與發燒紀錄相符。"],
      ["16:20", "抗生素給藥完成", "Ceftriaxone 已給藥，下一劑 04:00。"],
    ],
    sources: [
      ["生命徵象", "21:10", "SpO₂ 91%，RR 24/min，來源：床邊監測系統"],
      ["LIS", "18:42", "WBC 15.2、CRP 13.4，報告狀態：final"],
      ["NIS", "20:15", "護理紀錄：咳嗽增加，活動後喘。"],
    ],
    rules: [
      ["high", "低血氧趨勢", "SpO₂ 連續下降且低於病房警示閾值。"],
      ["medium", "感染指標上升", "WBC 與 CRP 同步上升。"],
    ],
    audit: [["20:55", "AI 產生摘要草稿"], ["20:56", "來源追蹤完成"]],
  },
  {
    id: "703-1",
    name: "林 O 宏",
    age: 68,
    diagnosis: "糖尿病足感染",
    nurse: "李護理師",
    risk: "medium",
    confirmed: false,
    vitals: "T 37.8°C",
    vitalTrend: "夜間微燒",
    labs: "Glucose 238",
    labTrend: "飯後偏高",
    meds: "Insulin sliding scale",
    medTrend: "需確認餐前血糖",
    draft:
      "病人糖尿病足感染治療中，傷口換藥後滲液較昨日減少，但晚間體溫 37.8°C。飯後血糖 238 mg/dL，已依 sliding scale 給藥。請接班後確認 06:00 血糖、傷口疼痛與滲液狀況，並追蹤抗生素下一次給藥。",
    timeline: [
      ["20:40", "飯後血糖偏高", "Glucose 238，已依醫囑給 insulin。"],
      ["18:10", "傷口換藥", "滲液較昨日減少，疼痛 3/10。"],
      ["15:50", "微燒", "體溫 37.8°C，無寒顫。"],
    ],
    sources: [
      ["NIS", "18:10", "傷口紀錄與疼痛評估。"],
      ["LIS", "20:40", "POCT glucose 238 mg/dL。"],
      ["藥局", "20:47", "Insulin 給藥紀錄完成。"],
    ],
    rules: [["medium", "血糖偏高", "飯後血糖高於設定閾值，需交班追蹤。"]],
    audit: [["20:50", "AI 產生摘要草稿"]],
  },
  {
    id: "705-2",
    name: "黃 O 美",
    age: 82,
    diagnosis: "跌倒後觀察",
    nurse: "周護理師",
    risk: "low",
    confirmed: true,
    vitals: "BP 128/72",
    vitalTrend: "穩定",
    labs: "Hb 11.8",
    labTrend: "無明顯變化",
    meds: "止痛 PRN",
    medTrend: "本班未使用",
    draft:
      "病人跌倒後觀察中，本班生命徵象穩定，無頭暈、嘔吐或意識改變。疼痛 2/10，本班未使用 PRN 止痛藥。請接班後持續執行跌倒預防措施，協助下床並追蹤夜間疼痛。",
    timeline: [
      ["21:00", "生命徵象穩定", "BP 128/72，HR 78，無神經學變化。"],
      ["18:30", "疼痛評估", "疼痛 2/10，未使用 PRN。"],
      ["16:00", "跌倒預防確認", "床欄、呼叫鈴、夜燈已確認。"],
    ],
    sources: [
      ["生命徵象", "21:00", "BP 128/72，HR 78。"],
      ["NIS", "18:30", "疼痛與神經學評估。"],
    ],
    rules: [["low", "跌倒預防追蹤", "高齡且跌倒後觀察，維持交班提醒。"]],
    audit: [["19:05", "AI 產生摘要草稿"], ["19:10", "護理師確認摘要"]],
  },
  {
    id: "708-1",
    name: "吳 O 信",
    age: 59,
    diagnosis: "心衰竭急性惡化",
    nurse: "王護理師",
    risk: "high",
    confirmed: false,
    vitals: "RR 26/min",
    vitalTrend: "呼吸喘增加",
    labs: "K 3.1",
    labTrend: "低血鉀",
    meds: "Furosemide IV",
    medTrend: "需追蹤尿量與電解質",
    draft:
      "病人心衰竭急性惡化，使用 Furosemide IV 後尿量增加，但夜間呼吸喘仍明顯，RR 26/min。K 3.1，已通知醫師並等待補鉀醫囑。請接班後優先追蹤呼吸狀態、尿量、體重與電解質回報，並確認補鉀處置是否完成。",
    timeline: [
      ["22:05", "低血鉀", "K 3.1，已通知醫師。"],
      ["21:20", "呼吸喘增加", "RR 26/min，坐姿較舒適。"],
      ["17:40", "利尿劑給藥", "Furosemide IV 後尿量 900 mL。"],
    ],
    sources: [
      ["LIS", "22:05", "K 3.1 mmol/L，低於規則閾值。"],
      ["NIS", "21:20", "呼吸喘增加，坐姿休息。"],
      ["藥局", "17:40", "Furosemide IV 給藥紀錄。"],
    ],
    rules: [
      ["high", "低血鉀", "K 低於 3.3，且使用利尿劑。"],
      ["high", "呼吸狀態惡化", "RR 增加且與心衰竭診斷相關。"],
    ],
    audit: [["22:06", "AI 產生摘要草稿"], ["22:07", "高風險規則命中"]],
  },
];

const riskLabels = {
  high: "High Risk",
  medium: "Medium Risk",
  low: "Low Risk",
};

const state = {
  patients: structuredClone(seedPatients),
  selectedId: seedPatients[0].id,
  activeView: "handoff",
  riskFilter: "all",
  search: "",
  onlyUnconfirmed: false,
  timeRange: "48",
};

const el = {
  patientSearch: document.querySelector("#patientSearch"),
  resetDemo: document.querySelector("#resetDemo"),
  patientList: document.querySelector("#patientList"),
  patientCount: document.querySelector("#patientCount"),
  patientName: document.querySelector("#patientName"),
  patientMeta: document.querySelector("#patientMeta"),
  riskBadge: document.querySelector("#riskBadge"),
  vitalMetric: document.querySelector("#vitalMetric"),
  vitalTrend: document.querySelector("#vitalTrend"),
  labMetric: document.querySelector("#labMetric"),
  labTrend: document.querySelector("#labTrend"),
  medMetric: document.querySelector("#medMetric"),
  medTrend: document.querySelector("#medTrend"),
  timeline: document.querySelector("#timeline"),
  draftText: document.querySelector("#draftText"),
  draftState: document.querySelector("#draftState"),
  confirmDraft: document.querySelector("#confirmDraft"),
  editDraft: document.querySelector("#editDraft"),
  rejectDraft: document.querySelector("#rejectDraft"),
  sendDraft: document.querySelector("#sendDraft"),
  sourceList: document.querySelector("#sourceList"),
  ruleHits: document.querySelector("#ruleHits"),
  auditTrail: document.querySelector("#auditTrail"),
  toast: document.querySelector("#toast"),
  onlyUnconfirmed: document.querySelector("#onlyUnconfirmed"),
  timeRange: document.querySelector("#timeRange"),
  syncStatus: document.querySelector("#syncStatus"),
  simulateUpdate: document.querySelector("#simulateUpdate"),
  sourceTotal: document.querySelector("#sourceTotal"),
  sourceTable: document.querySelector("#sourceTable"),
  sourceQuality: document.querySelector("#sourceQuality"),
  auditTotal: document.querySelector("#auditTotal"),
  auditTable: document.querySelector("#auditTable"),
  governanceStats: document.querySelector("#governanceStats"),
  ruleTotal: document.querySelector("#ruleTotal"),
  ruleCatalog: document.querySelector("#ruleCatalog"),
  ruleDistribution: document.querySelector("#ruleDistribution"),
};

function selectedPatient() {
  return state.patients.find((patient) => patient.id === state.selectedId) ?? state.patients[0];
}

function filteredPatients() {
  const query = state.search.trim().toLowerCase();

  return state.patients.filter((patient) => {
    const matchesRisk = state.riskFilter === "all" || patient.risk === state.riskFilter;
    const matchesConfirm = !state.onlyUnconfirmed || !patient.confirmed;
    const matchesQuery =
      !query ||
      [patient.id, patient.name, patient.diagnosis, patient.nurse].some((value) =>
        value.toLowerCase().includes(query),
      );

    return matchesRisk && matchesConfirm && matchesQuery;
  });
}

function allSources() {
  return state.patients.flatMap((patient) =>
    patient.sources.map(([type, time, detail]) => ({
      patient,
      type,
      time,
      detail,
      status: type === "系統" ? "待確認" : "已追蹤",
    })),
  );
}

function allAuditEvents() {
  return state.patients.flatMap((patient) =>
    patient.audit.map(([time, detail], index) => ({
      patient,
      time,
      detail,
      actor: detail.includes("護理師") ? patient.nurse : "AI 模組",
      version: `r${patient.rules.length}.m${index + 1}`,
    })),
  );
}

function allRuleHits() {
  return state.patients.flatMap((patient) =>
    patient.rules.map(([severity, title, detail]) => ({
      patient,
      severity,
      title,
      detail,
    })),
  );
}

function renderPatients() {
  const patients = filteredPatients();
  el.patientCount.textContent = patients.length;

  if (!patients.some((patient) => patient.id === state.selectedId) && patients[0]) {
    state.selectedId = patients[0].id;
  }

  el.patientList.innerHTML = patients
    .map(
      (patient) => `
        <button class="patient-row ${patient.id === state.selectedId ? "active" : ""}" type="button" data-patient-id="${patient.id}">
          <header>
            <div>
              <strong>${patient.id} ${patient.name}</strong>
              <small>${patient.diagnosis}</small>
            </div>
            <span class="risk-dot risk-${patient.risk}" title="${riskLabels[patient.risk]}"></span>
          </header>
          <div class="row-meta">${riskLabels[patient.risk]} · ${patient.confirmed ? "已確認" : "待確認"} · ${patient.nurse}</div>
        </button>
      `,
    )
    .join("");
}

function renderDetail() {
  const patient = selectedPatient();

  el.patientName.textContent = `${patient.id} ${patient.name}`;
  el.patientMeta.innerHTML = `
    <span>${patient.age} 歲</span>
    <span>${patient.diagnosis}</span>
    <span>責任護理師：${patient.nurse}</span>
    <span>資料區間：近 ${state.timeRange} 小時</span>
  `;
  el.riskBadge.className = `risk-badge risk-${patient.risk}`;
  el.riskBadge.textContent = riskLabels[patient.risk];

  el.vitalMetric.textContent = patient.vitals;
  el.vitalTrend.textContent = patient.vitalTrend;
  el.labMetric.textContent = patient.labs;
  el.labTrend.textContent = patient.labTrend;
  el.medMetric.textContent = patient.meds;
  el.medTrend.textContent = patient.medTrend;

  el.timeline.innerHTML = patient.timeline
    .map(
      ([time, title, description]) => `
        <article class="timeline-item">
          <time>${time}</time>
          <div>
            <strong>${title}</strong>
            <p>${description}</p>
          </div>
        </article>
      `,
    )
    .join("");

  el.draftText.value = patient.draft;
  syncDraftState(patient);
  renderSources(patient);
  renderRules(patient);
  renderAudit(patient);
}

function syncDraftState(patient) {
  el.draftState.className = "state-chip";
  if (patient.rejected) {
    el.draftState.classList.add("rejected");
    el.draftState.textContent = "已退回";
  } else if (patient.confirmed) {
    el.draftState.classList.add("confirmed");
    el.draftState.textContent = "已確認";
  } else {
    el.draftState.textContent = "待確認";
  }

  el.sendDraft.disabled = !patient.confirmed || patient.sent;
  el.sendDraft.textContent = patient.sent ? "已送出 NIS" : "Send to NIS";
}

function renderSources(patient) {
  el.sourceList.innerHTML = patient.sources
    .map(
      ([type, time, detail]) => `
        <article class="source-card">
          <header>
            <strong>${time}</strong>
            <span class="source-type">${type}</span>
          </header>
          <p>${detail}</p>
          <small>已保留時間戳記與來源版本</small>
        </article>
      `,
    )
    .join("");
}

function renderRules(patient) {
  el.ruleHits.innerHTML = patient.rules
    .map(
      ([severity, title, detail]) => `
        <article class="rule-card">
          <header>
            <strong>${title}</strong>
            <span class="rule-severity ${severity}">${severity}</span>
          </header>
          <p>${detail}</p>
        </article>
      `,
    )
    .join("");
}

function renderAudit(patient) {
  el.auditTrail.innerHTML = patient.audit
    .map(
      ([time, detail]) => `
        <article class="audit-item">
          <small>${time}</small>
          <p>${detail}</p>
        </article>
      `,
    )
    .join("");
}

function renderSourcePage() {
  const sources = allSources();
  const systemCounts = sources.reduce((counts, source) => {
    counts[source.type] = (counts[source.type] ?? 0) + 1;
    return counts;
  }, {});

  el.sourceTotal.textContent = sources.length;
  el.sourceTable.innerHTML = sources
    .map(
      (source) => `
        <tr>
          <td><strong>${source.time}</strong></td>
          <td>
            <span class="table-patient">${source.patient.id} ${source.patient.name}</span>
            <span class="table-subtext">${source.patient.diagnosis}</span>
          </td>
          <td><span class="source-type">${source.type}</span></td>
          <td>${source.detail}</td>
          <td><span class="status-chip ${source.status === "待確認" ? "warning" : ""}">${source.status}</span></td>
        </tr>
      `,
    )
    .join("");
  el.sourceQuality.innerHTML = Object.entries(systemCounts)
    .map(([type, count]) => {
      const pct = Math.round((count / sources.length) * 100);
      return `
        <article class="stat-row">
          <header>
            <span>${type}</span>
            <strong>${count}</strong>
          </header>
          <div class="progress-track"><div class="progress-fill" style="width: ${pct}%"></div></div>
          <p>占本班來源 ${pct}% · 皆保留時間戳記</p>
        </article>
      `;
    })
    .join("");
}

function renderAuditPage() {
  const events = allAuditEvents();
  const confirmedCount = state.patients.filter((patient) => patient.confirmed).length;
  const sentCount = state.patients.filter((patient) => patient.sent).length;

  el.auditTotal.textContent = events.length;
  el.auditTable.innerHTML = events
    .map(
      (event) => `
        <tr>
          <td><strong>${event.time}</strong></td>
          <td>
            <span class="table-patient">${event.patient.id} ${event.patient.name}</span>
            <span class="table-subtext">${riskLabels[event.patient.risk]} · ${event.patient.nurse}</span>
          </td>
          <td>${event.detail}</td>
          <td>${event.actor}</td>
          <td><span class="status-chip">${event.version}</span></td>
        </tr>
      `,
    )
    .join("");
  el.governanceStats.innerHTML = `
    <article class="stat-row">
      <header><span>摘要確認</span><strong>${confirmedCount}/${state.patients.length}</strong></header>
      <div class="progress-track"><div class="progress-fill" style="width: ${(confirmedCount / state.patients.length) * 100}%"></div></div>
      <p>未確認內容不進正式交班紀錄</p>
    </article>
    <article class="stat-row">
      <header><span>NIS 寫回</span><strong>${sentCount}</strong></header>
      <div class="progress-track"><div class="progress-fill" style="width: ${(sentCount / state.patients.length) * 100}%"></div></div>
      <p>送出後保留操作者、版本與來源</p>
    </article>
    <article class="stat-row">
      <header><span>可回溯事件</span><strong>${events.length}</strong></header>
      <p>涵蓋 AI 產生、來源追蹤、規則命中、護理師確認與寫回</p>
    </article>
  `;
}

function renderRulesPage() {
  const hits = allRuleHits();
  const distribution = ["high", "medium", "low"].map((severity) => ({
    severity,
    count: hits.filter((hit) => hit.severity === severity).length,
  }));

  el.ruleTotal.textContent = hits.length;
  el.ruleCatalog.innerHTML = hits
    .map(
      (hit) => `
        <article class="catalog-card">
          <header>
            <div>
              <h3>${hit.title}</h3>
              <p>${hit.detail}</p>
            </div>
            <span class="rule-severity ${hit.severity}">${hit.severity}</span>
          </header>
          <div class="catalog-meta">
            <span>${hit.patient.id} ${hit.patient.name}</span>
            <span>${hit.patient.diagnosis}</span>
            <span>${riskLabels[hit.patient.risk]}</span>
          </div>
        </article>
      `,
    )
    .join("");
  el.ruleDistribution.innerHTML = distribution
    .map(({ severity, count }) => {
      const pct = hits.length ? Math.round((count / hits.length) * 100) : 0;
      return `
        <article class="stat-row">
          <header>
            <span>${riskLabels[severity]}</span>
            <strong>${count}</strong>
          </header>
          <div class="progress-track"><div class="progress-fill" style="width: ${pct}%"></div></div>
          <p>本班規則命中占比 ${pct}%</p>
        </article>
      `;
    })
    .join("");
}

function renderSecondaryViews() {
  renderSourcePage();
  renderAuditPage();
  renderRulesPage();
}

function addAudit(patient, detail) {
  const now = new Date();
  const time = now.toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit", hour12: false });
  patient.audit = [[time, detail], ...patient.audit].slice(0, 6);
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => el.toast.classList.remove("show"), 2200);
}

function render() {
  renderPatients();
  renderDetail();
  renderSecondaryViews();
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.riskFilter = button.dataset.risk;
    render();
  });
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.activeView = button.dataset.nav;
    document.querySelectorAll(".view").forEach((view) => {
      view.classList.toggle("active", view.dataset.view === state.activeView);
    });
    showToast(`切換到「${button.textContent}」畫面`);
  });
});

el.patientList.addEventListener("click", (event) => {
  const row = event.target.closest("[data-patient-id]");
  if (!row) return;
  state.selectedId = row.dataset.patientId;
  render();
});

el.patientSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

el.onlyUnconfirmed.addEventListener("change", (event) => {
  state.onlyUnconfirmed = event.target.checked;
  render();
});

el.timeRange.addEventListener("change", (event) => {
  state.timeRange = event.target.value;
  renderDetail();
});

el.draftText.addEventListener("input", () => {
  const patient = selectedPatient();
  patient.draft = el.draftText.value;
  patient.confirmed = false;
  patient.sent = false;
  patient.rejected = false;
  syncDraftState(patient);
});

el.confirmDraft.addEventListener("click", () => {
  const patient = selectedPatient();
  patient.confirmed = true;
  patient.rejected = false;
  addAudit(patient, "護理師確認 AI 摘要");
  showToast("摘要已確認，可送出至 NIS");
  render();
});

el.editDraft.addEventListener("click", () => {
  el.draftText.focus();
  el.draftText.setSelectionRange(el.draftText.value.length, el.draftText.value.length);
  showToast("可直接在草稿欄位修改內容");
});

el.rejectDraft.addEventListener("click", () => {
  const patient = selectedPatient();
  patient.confirmed = false;
  patient.sent = false;
  patient.rejected = true;
  addAudit(patient, "護理師退回 AI 摘要");
  showToast("摘要已退回，未寫入正式交班");
  render();
});

el.sendDraft.addEventListener("click", () => {
  const patient = selectedPatient();
  if (!patient.confirmed) {
    showToast("需先確認摘要才能送出");
    return;
  }
  patient.sent = true;
  addAudit(patient, "摘要寫回 NIS 交班紀錄");
  showToast("已送出至 NIS 交班紀錄");
  render();
});

el.simulateUpdate.addEventListener("click", () => {
  const patient = selectedPatient();
  patient.timeline = [["現在", "收到新資料", `系統重新擷取近 ${state.timeRange} 小時資料並更新風險摘要。`], ...patient.timeline].slice(0, 4);
  patient.sources = [["系統", "現在", "示範模式：新增一筆同步事件。"], ...patient.sources].slice(0, 4);
  patient.confirmed = false;
  patient.sent = false;
  patient.rejected = false;
  addAudit(patient, "資料更新後重新產生 AI 摘要");
  el.syncStatus.textContent = "資料同步：現在";
  showToast("已模擬新資料同步");
  render();
});

el.resetDemo.addEventListener("click", () => {
  state.patients = structuredClone(seedPatients);
  state.selectedId = seedPatients[0].id;
  state.riskFilter = "all";
  state.search = "";
  state.onlyUnconfirmed = false;
  state.timeRange = "48";
  el.patientSearch.value = "";
  el.onlyUnconfirmed.checked = false;
  el.timeRange.value = "48";
  document.querySelectorAll(".segment").forEach((item) => item.classList.toggle("active", item.dataset.risk === "all"));
  el.syncStatus.textContent = "資料同步：剛剛";
  showToast("示範資料已重置");
  render();
});

render();
