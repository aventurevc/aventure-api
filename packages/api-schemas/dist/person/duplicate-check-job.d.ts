import { z } from "zod/v4";
declare const PersonDuplicateCheckJobSchemaDefinition: z.ZodObject<{
    correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodISODateTime;
    criteria: z.ZodType<{
        excludeId?: string | null | undefined;
        location?: string | null | undefined;
        nameAny?: string | null | undefined;
        nameFull?: string | null | undefined;
        qwen4bFp16Embedding?: number[] | null | undefined;
        slug?: string | null | undefined;
        url?: string | null | undefined;
        urlCandidate?: {
            url?: string | null | undefined;
            urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
        }[] | undefined;
        urlDomain?: string | null | undefined;
        urlMatchMode?: "domain" | "hostPath" | null | undefined;
        urlStrictness?: "any" | "loose" | "strict" | null | undefined;
        urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        excludeId?: string | null | undefined;
        location?: string | null | undefined;
        nameAny?: string | null | undefined;
        nameFull?: string | null | undefined;
        qwen4bFp16Embedding?: number[] | null | undefined;
        slug?: string | null | undefined;
        url?: string | null | undefined;
        urlCandidate?: {
            url?: string | null | undefined;
            urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
        }[] | undefined;
        urlDomain?: string | null | undefined;
        urlMatchMode?: "domain" | "hostPath" | null | undefined;
        urlStrictness?: "any" | "loose" | "strict" | null | undefined;
        urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
    }, unknown>>;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isTerminal: z.ZodBoolean;
    jobId: z.ZodUUID;
    result: z.ZodType<{
        matchedPersonId: string[];
        totalMatches: number;
    }, unknown, z.core.$ZodTypeInternals<{
        matchedPersonId: string[];
        totalMatches: number;
    }, unknown>>;
    state: z.ZodEnum<{
        CANCELED: "CANCELED";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        PENDING: "PENDING";
        RUNNING: "RUNNING";
        UNKNOWN: "UNKNOWN";
    }>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type PersonDuplicateCheckJobDefinition = z.infer<typeof PersonDuplicateCheckJobSchemaDefinition>;
/**
 * Person duplicate-check job status snapshot
 *
 * @openapiSchema PersonDuplicateCheckJob
 * @endpoint GET /v1/jobs/people/duplicate-check
 * @endpoint GET /v1/jobs/people/duplicate-check/{jobId}
 * @contractShape person.duplicate-check-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckJobSnapshot.kt
 */
export declare const PersonDuplicateCheckJobSchema: z.ZodType<PersonDuplicateCheckJobDefinition>;
export type PersonDuplicateCheckJob = z.infer<typeof PersonDuplicateCheckJobSchema>;
export {};
//# sourceMappingURL=duplicate-check-job.d.ts.map