import { z } from "zod/v4";
declare const PersonDuplicateCriteriaSchemaDefinition: z.ZodObject<{
    excludeId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameAny: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameFull: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    qwen4bFp16Embedding: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    urlCandidate: z.ZodOptional<z.ZodArray<z.ZodType<{
        url?: string | null | undefined;
        urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        url?: string | null | undefined;
        urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
    }, unknown>>>>;
    urlDomain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    urlMatchMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        domain: "domain";
        hostPath: "hostPath";
    }>>>;
    urlStrictness: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        any: "any";
        loose: "loose";
        strict: "strict";
    }>>>;
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
type PersonDuplicateCriteriaDefinition = z.infer<typeof PersonDuplicateCriteriaSchemaDefinition>;
/**
 * Canonical person duplicate-check criteria. URL matching stays strict when urlStrictness is omitted; clients can opt into broader matching with loose or any.
 *
 * @openapiSchema PersonDuplicateCriteria
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check/candidates
 * @contractShape person.duplicate-criteria
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/search/PersonDuplicateCriteria.kt
 */
export declare const PersonDuplicateCriteriaSchema: z.ZodType<PersonDuplicateCriteriaDefinition>;
export type PersonDuplicateCriteria = z.infer<typeof PersonDuplicateCriteriaSchema>;
export {};
//# sourceMappingURL=duplicate-criteria.d.ts.map