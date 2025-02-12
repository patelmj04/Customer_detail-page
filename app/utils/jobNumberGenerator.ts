let lastJobNumber = 0

export function generateJobNumber(): string {
  lastJobNumber++
  return `JOB${String(lastJobNumber).padStart(5, "0")}`
}

