export async function getObject() {
  await loadBands();
  await loadSchedule();
  prepareObjects();
}

async function loadBands() {
  const resp = await fetch("http://localhost:8080/bands");
  const data = await resp.json();
  bandData = data;
}

async function loadSchedule() {
  const resp = await fetch("http://localhost:8080/schedule");
  const data = await resp.json();
  scheduleData = data;
}
