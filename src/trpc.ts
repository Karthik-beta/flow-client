import { createTRPCReact } from '@trpc/react-query';
import type { Router } from '../../server/src/index';

export const trpc = createTRPCReact<Router>();