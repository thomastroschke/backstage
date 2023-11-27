/*
 * Copyright 2020 The Backstage Authors
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

import { Logger } from 'winston';
import type { KubernetesRequestBody } from '@backstage/plugin-kubernetes-common';
import { Config } from '@backstage/config';
import {
  CustomResource,
  KubernetesFetcher,
  KubernetesServiceLocator,
  ObjectToFetch,
} from '@backstage/plugin-kubernetes-node';

/**
 *
 * @public
 */
export type ServiceLocatorMethod = 'multiTenant' | 'singleTenant' | 'http'; // TODO implement http

/**
 *
 * @public
 */
export interface KubernetesObjectsProviderOptions {
  logger: Logger;
  config: Config;
  fetcher: KubernetesFetcher;
  serviceLocator: KubernetesServiceLocator;
  customResources: CustomResource[];
  objectTypesToFetch?: ObjectToFetch[];
}

/**
 *
 * @public
 */
export type ObjectsByEntityRequest = KubernetesRequestBody;

// TODO remove this re-export as a breaking change after a couple of releases
export type * from '@backstage/plugin-kubernetes-node';
