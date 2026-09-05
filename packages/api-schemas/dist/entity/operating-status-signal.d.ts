import { z } from "zod/v4";
declare const EntityOperatingStatusSignalSchemaDefinition: z.ZodObject<{
    cdnProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        akamai: "akamai";
        awsCloudfront: "awsCloudfront";
        azureCdn: "azureCdn";
        bunny: "bunny";
        cdn77: "cdn77";
        cdnetworks: "cdnetworks";
        cloudflare: "cloudflare";
        digitalocean: "digitalocean";
        fastly: "fastly";
        gcore: "gcore";
        googlecloudCdn: "googlecloudCdn";
        incapsula: "incapsula";
        keycdn: "keycdn";
        leaseweb: "leaseweb";
        netlify: "netlify";
        none: "none";
        stackpath: "stackpath";
        sucuri: "sucuri";
        unknown: "unknown";
        vercel: "vercel";
    }>>>;
    checkedAt: z.ZodISODateTime;
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    currentOperatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Acquired: "Acquired";
        "Acquired Subsidiary": "Acquired Subsidiary";
        Closed: "Closed";
        "Closed (Acquihire)": "Closed (Acquihire)";
        Inactive: "Inactive";
        Operating: "Operating";
    }>>>;
    entityId: z.ZodUUID;
    evidence: z.ZodArray<z.ZodString>;
    httpStatus: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    probedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resolvedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    suggestedOperatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Acquired: "Acquired";
        "Acquired Subsidiary": "Acquired Subsidiary";
        Closed: "Closed";
        "Closed (Acquihire)": "Closed (Acquihire)";
        Inactive: "Inactive";
        Operating: "Operating";
    }>>>;
    verdict: z.ZodEnum<{
        ACQUISITION_SUSPECTED: "ACQUISITION_SUSPECTED";
        DEAD_TARGET: "DEAD_TARGET";
        EDGE_CHALLENGED: "EDGE_CHALLENGED";
        INDETERMINATE: "INDETERMINATE";
        LIVE: "LIVE";
        NO_WEBSITE: "NO_WEBSITE";
        PARKED: "PARKED";
    }>;
}, z.core.$strip>;
type EntityOperatingStatusSignalDefinition = z.infer<typeof EntityOperatingStatusSignalSchemaDefinition>;
/**
 * Read-only live-site signal for an entity's operating status.
 *
 * @openapiSchema EntityOperatingStatusSignal
 * @endpoint GET /v1/entities/{entityId}/operating-status/signal
 * @contractShape entity.operating-status-signal
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityOperatingStatusSignal.kt
 */
export declare const EntityOperatingStatusSignalSchema: z.ZodType<EntityOperatingStatusSignalDefinition>;
export type EntityOperatingStatusSignal = z.infer<typeof EntityOperatingStatusSignalSchema>;
export {};
//# sourceMappingURL=operating-status-signal.d.ts.map