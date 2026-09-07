import { z } from "zod/v4";
declare const DuplicateUrlCandidateSchemaDefinition: z.ZodObject<{
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    urlType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        alternativeto: "alternativeto";
        angellist: "angellist";
        appstore: "appstore";
        awsmarketplace: "awsmarketplace";
        bloomberg: "bloomberg";
        capterra: "capterra";
        changelog: "changelog";
        chromewebstore: "chromewebstore";
        crates: "crates";
        crunchbase: "crunchbase";
        discord: "discord";
        dockerhub: "dockerhub";
        documentation: "documentation";
        facebook: "facebook";
        forum: "forum";
        g2: "g2";
        gartnerpeerinsights: "gartnerpeerinsights";
        getapp: "getapp";
        github: "github";
        glassdoor: "glassdoor";
        googleplay: "googleplay";
        homebrew: "homebrew";
        hubspotmarketplace: "hubspotmarketplace";
        instagram: "instagram";
        linkedin: "linkedin";
        maven: "maven";
        morningstar: "morningstar";
        nasdaq: "nasdaq";
        npm: "npm";
        nyse: "nyse";
        pitchbook: "pitchbook";
        producthunt: "producthunt";
        pypi: "pypi";
        roadmap: "roadmap";
        salesforceappexchange: "salesforceappexchange";
        slackappdirectory: "slackappdirectory";
        sourceforge: "sourceforge";
        statuspage: "statuspage";
        subreddit: "subreddit";
        support: "support";
        theorg: "theorg";
        tiktok: "tiktok";
        trustpilot: "trustpilot";
        trustradius: "trustradius";
        twitter: "twitter";
        vscodemarketplace: "vscodemarketplace";
        website: "website";
        wellfound: "wellfound";
        wikipedia: "wikipedia";
        ycombinator: "ycombinator";
        youtube: "youtube";
    }>>>;
}, z.core.$strip>;
type DuplicateUrlCandidateDefinition = z.infer<typeof DuplicateUrlCandidateSchemaDefinition>;
/**
 * Typed URL signal used for duplicate detection
 *
 * @openapiSchema DuplicateUrlCandidate
 * @endpoint GET /v1/entities/duplicate-check
 * @endpoint GET /v1/entities/duplicate-check/candidates
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint GET /v1/people/duplicate-check/candidates
 * @endpoint POST /v1/entities/duplicate-check
 * @endpoint POST /v1/entities/duplicate-check/candidates
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check/candidates
 * @usedBySchema EntityDuplicateCriteriaSchema
 * @usedBySchema PersonDuplicateCriteriaSchema
 * @contractShape duplicate.url-candidate
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/search/DuplicateUrlCandidate.kt
 */
export declare const DuplicateUrlCandidateSchema: z.ZodType<DuplicateUrlCandidateDefinition>;
export type DuplicateUrlCandidate = z.infer<typeof DuplicateUrlCandidateSchema>;
export {};
//# sourceMappingURL=url-candidate.d.ts.map