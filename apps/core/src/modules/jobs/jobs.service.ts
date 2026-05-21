import { logger } from "../../lib/logger.js";

type RemoteOkJob = {
  company?: string;
  position?: string;
  tags?: string[];
  description?: string;
  location?: string;
  salary_min?: number;
  salary_max?: number;
  url?: string;
};

// 🔍 Search jobs from RemoteOK
export async function searchJobs(query: string) {
  try {
    logger.info(`🔍 Searching jobs for: ${query}`);

    // 1️⃣ Fetch jobs
    const response = await fetch("https://remoteok.com/api");

    // 2️⃣ Convert to JSON
    const jobs = (await response.json()) as RemoteOkJob[];

    // 3️⃣ Filter matching jobs
    const filteredJobs = jobs
      .filter((job: RemoteOkJob) => {
        const text = `
${job.position}
${job.tags?.join(" ")}
${job.description}
`.toLowerCase();

        return text.includes(query.toLowerCase());
      })

      .slice(0, 5)

      .map((job: RemoteOkJob) => ({
        company: job.company,

        position: job.position,

        location: job.location,

        salary:
          job.salary_min && job.salary_max
            ? `$${job.salary_min} - $${job.salary_max}`
            : "Not specified",

        url: job.url,
      }));

    logger.info(`✅ Found ${filteredJobs.length} jobs`);

    return filteredJobs;
  } catch (error) {
    logger.error("❌ Job search failed");

    logger.error(error);

    return [];
  }
}
