/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

export * from './actions.api';
import { ActionsApi } from './actions.api';
export * from './activities.api';
import { ActivitiesApi } from './activities.api';
export * from './audit.api';
import { AuditApi } from './audit.api';
export * from './comments.api';
import { CommentsApi } from './comments.api';
export * from './downloads.api';
import { DownloadsApi } from './downloads.api';
export * from './favorites.api';
import { FavoritesApi } from './favorites.api';
export * from './groups.api';
import { GroupsApi } from './groups.api';
export * from './networks.api';
import { NetworksApi } from './networks.api';
export * from './nodes.api';
import { NodesApi } from './nodes.api';
export * from './people.api';
import { PeopleApi } from './people.api';
export * from './preferences.api';
import { PreferencesApi } from './preferences.api';
export * from './probes.api';
import { ProbesApi } from './probes.api';
export * from './queries.api';
import { QueriesApi } from './queries.api';
export * from './ratings.api';
import { RatingsApi } from './ratings.api';
export * from './renditions.api';
import { RenditionsApi } from './renditions.api';
export * from './sharedlinks.api';
import { SharedlinksApi } from './sharedlinks.api';
export * from './sites.api';
import { SitesApi } from './sites.api';
export * from './tags.api';
import { TagsApi } from './tags.api';
export * from './trashcan.api';
import { TrashcanApi } from './trashcan.api';
export * from './versions.api';
import { VersionsApi } from './versions.api';
export const APIS = {
    ActionsApi: ActionsApi,
    ActivitiesApi: ActivitiesApi,
    AuditApi: AuditApi,
    CommentsApi: CommentsApi,
    DownloadsApi: DownloadsApi,
    FavoritesApi: FavoritesApi,
    GroupsApi: GroupsApi,
    NetworksApi: NetworksApi,
    NodesApi: NodesApi,
    PeopleApi: PeopleApi,
    PreferencesApi: PreferencesApi,
    ProbesApi: ProbesApi,
    QueriesApi: QueriesApi,
    RatingsApi: RatingsApi,
    RenditionsApi: RenditionsApi,
    SharedlinksApi: SharedlinksApi,
    SitesApi: SitesApi,
    TagsApi: TagsApi,
    TrashcanApi: TrashcanApi,
    VersionsApi: VersionsApi
};
