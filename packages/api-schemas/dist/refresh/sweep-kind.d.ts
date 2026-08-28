import { z } from "zod/v4";
/**
 * User-triggerable refresh sweep modes for the /refresh/sweep `kind` query param
 *
 * @openapiSchema RefreshSweepKind
 * @endpoint POST /v1/content/embedding/refresh/sweep
 * @contractShape refresh.sweep-kind
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/RefreshSweepKind.kt
 */
export declare const RefreshSweepKindSchema: z.ZodEnum<{
    "owner-reconcile": "owner-reconcile";
    "stale-embedding": "stale-embedding";
    "stale-similarity": "stale-similarity";
}>;
export type RefreshSweepKind = z.infer<typeof RefreshSweepKindSchema>;
//# sourceMappingURL=sweep-kind.d.ts.map