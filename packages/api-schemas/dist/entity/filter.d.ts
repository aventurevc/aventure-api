import { z } from "zod/v4";
/**
 * Entity list and search filters. GET flattens these fields as query parameters; POST accepts the same shape as JSON.
 *
 * @openapiSchema EntityFilter
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint POST /v1/app/saved-views
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema EntityFilterSearchSchema
 * @usedBySchema EntityNaturalSearchSchema
 * @usedBySchema SavedViewParamSchema
 * @usedBySchema SearchInterpretationSchema
 * @contractShape entity.filter
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/filter/entity/EntityFilter.kt
 */
export declare const EntityFilterSchema: z.ZodObject<{
    acceleratorBrand: z.ZodOptional<z.ZodArray<z.ZodString>>;
    acceleratorCohort: z.ZodOptional<z.ZodArray<z.ZodString>>;
    acceleratorName: z.ZodOptional<z.ZodArray<z.ZodString>>;
    acceleratorStatus: z.ZodOptional<z.ZodArray<z.ZodString>>;
    affinity: z.ZodOptional<z.ZodArray<z.ZodString>>;
    createdAtRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        max: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        min: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    employeeCountRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
    entityId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    entityName: z.ZodOptional<z.ZodArray<z.ZodString>>;
    featured: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    fundraiseActivity: z.ZodOptional<z.ZodObject<{
        amountInvestedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        amountRaisedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        investedCompanyName: z.ZodOptional<z.ZodArray<z.ZodString>>;
        investorActivity: z.ZodOptional<z.ZodObject<{
            averageAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
            largestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
            smallestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
            totalAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
            totalInvestmentRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
        }, z.core.$strip>>;
        lastRoundYearRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        round: z.ZodOptional<z.ZodArray<z.ZodString>>;
        totalRaisedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        valuationRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
    }, z.core.$strip>>;
    hasFundraising: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    hasLogo: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    hasRealLogo: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    headquartersCity: z.ZodOptional<z.ZodArray<z.ZodString>>;
    headquartersCountry: z.ZodOptional<z.ZodArray<z.ZodString>>;
    headquartersState: z.ZodOptional<z.ZodArray<z.ZodString>>;
    industry: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    letter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    location: z.ZodOptional<z.ZodArray<z.ZodString>>;
    logoOption: z.ZodOptional<z.ZodObject<{
        sortPriority: z.ZodEnum<{
            ANY_LOGO_FIRST: "ANY_LOGO_FIRST";
            NONE: "NONE";
            REAL_LOGO_FIRST: "REAL_LOGO_FIRST";
        }>;
    }, z.core.$strip>>;
    mainProduct: z.ZodOptional<z.ZodArray<z.ZodString>>;
    operatingStatus: z.ZodOptional<z.ZodArray<z.ZodString>>;
    portfolioHeadquartersCity: z.ZodOptional<z.ZodArray<z.ZodString>>;
    portfolioHeadquartersCountry: z.ZodOptional<z.ZodArray<z.ZodString>>;
    portfolioHeadquartersState: z.ZodOptional<z.ZodArray<z.ZodString>>;
    qualityGate: z.ZodOptional<z.ZodEnum<{
        COMPANY_LISTING_READY: "COMPANY_LISTING_READY";
        NONE: "NONE";
    }>>;
    semanticQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    showOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    slug: z.ZodOptional<z.ZodArray<z.ZodString>>;
    stage: z.ZodOptional<z.ZodArray<z.ZodString>>;
    suppressNonOperating: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    suppressZeroTotalRaised: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    tag: z.ZodOptional<z.ZodArray<z.ZodString>>;
    textSearch: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    typeCustomer: z.ZodOptional<z.ZodArray<z.ZodString>>;
    typeModel: z.ZodOptional<z.ZodArray<z.ZodString>>;
    typeOwnership: z.ZodOptional<z.ZodArray<z.ZodString>>;
    typeRecord: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
    typeRevenue: z.ZodOptional<z.ZodArray<z.ZodString>>;
    typeTechnologyUsed: z.ZodOptional<z.ZodArray<z.ZodString>>;
    updatedAtRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        max: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        min: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    urlDomain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    urlMatchMode: z.ZodOptional<z.ZodEnum<{
        domain: "domain";
        hostPath: "hostPath";
    }>>;
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
    yearFoundedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, unknown>>>>;
}, z.core.$strict>;
export type EntityFilter = z.infer<typeof EntityFilterSchema>;
//# sourceMappingURL=filter.d.ts.map