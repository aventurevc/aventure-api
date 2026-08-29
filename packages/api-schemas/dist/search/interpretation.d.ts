import { z } from "zod/v4";
declare const SearchInterpretationSchemaDefinition: z.ZodObject<{
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    execution: z.ZodType<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown>>;
    fallbackUsed: z.ZodBoolean;
    filter: z.ZodObject<{
        acceleratorBrand: z.ZodOptional<z.ZodArray<z.ZodString>>;
        acceleratorCohort: z.ZodOptional<z.ZodArray<z.ZodString>>;
        acceleratorName: z.ZodOptional<z.ZodArray<z.ZodString>>;
        acceleratorStatus: z.ZodOptional<z.ZodArray<z.ZodString>>;
        affinity: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
        headquartersCity: z.ZodOptional<z.ZodArray<z.ZodString>>;
        headquartersCountry: z.ZodOptional<z.ZodArray<z.ZodString>>;
        headquartersState: z.ZodOptional<z.ZodArray<z.ZodString>>;
        industry: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
    interpretation: z.ZodString;
    sort: z.ZodType<{
        order: {
            descending: boolean;
            field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
        }[];
    }, unknown, z.core.$ZodTypeInternals<{
        order: {
            descending: boolean;
            field: "ACCELERATOR_BRAND" | "ACCELERATOR_COHORT" | "AMOUNT_INVESTED" | "CREATED_AT" | "EMPLOYEE_COUNT" | "HEADQUARTERS_COUNTRY" | "ID" | "LATEST_VALUATION" | "MOST_RECENT_AMOUNT" | "MOST_RECENT_DATE" | "NAME_BRAND" | "STAGE" | "STATUS_OPERATING" | "TOTAL_RAISED" | "UPDATED_AT" | "YEAR_FOUNDED";
        }[];
    }, unknown>>;
    unsupported: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SearchInterpretationDefinition = z.infer<typeof SearchInterpretationSchemaDefinition>;
/**
 * Structured interpretation of a natural-language entity search: canonical filter, sort, confidence, and any unsupported constraint the planner could not translate.
 *
 * @openapiSchema SearchInterpretation
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.interpretation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/SearchInterpretation.kt
 */
export declare const SearchInterpretationSchema: z.ZodType<SearchInterpretationDefinition>;
export type SearchInterpretation = z.infer<typeof SearchInterpretationSchema>;
export {};
//# sourceMappingURL=interpretation.d.ts.map