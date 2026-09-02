import { z } from "zod/v4";
/**
 * Geographic scope tier for location directory
 *
 * @openapiSchema LocationScope
 * @endpoint GET /v1/addresses/locations/{scope}
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationIdentifierSchema
 * @contractShape location.scope
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/location/Location.kt
 */
export declare const LocationScopeSchema: z.ZodEnum<{
    city: "city";
    country: "country";
    state: "state";
}>;
export type LocationScope = z.infer<typeof LocationScopeSchema>;
//# sourceMappingURL=scope.d.ts.map