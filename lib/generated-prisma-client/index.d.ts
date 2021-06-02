
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model accounts
 */

export type accounts = {
  id: number
  name: string | null
  created_at: Date | null
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model categories
 */

export type categories = {
  id: number
  name: string | null
  slug: string | null
  description: string | null
  specifications: string | null
  created_at: Date | null
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model orders
 */

export type orders = {
  id: number
  user_id: number
  account_id: number
  order_details: string
  status: string
  created_at: Date | null
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model posts
 */

export type posts = {
  id: number
  account_id: number
  user_id: number
  category_id: number
  title: string
  slug: string
  excerpt: string
  description: string | null
  tags: string | null
  metadata: string | null
  created_at: Date | null
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model products
 */

export type products = {
  id: number
  account_id: number
  user_id: number
  category_id: number
  product: string
  created_at: Date | null
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model users
 */

export type users = {
  id: number
  account_id: number
  email: string
  phone: string | null
  name: string
  email_verified_at: Date | null
  password: string | null
  provider: string | null
  provider_id: string | null
  owner: boolean
  metadata: string | null
  created_at: Date | null
  updated_at: Date | null
  deleted_at: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<GlobalReject>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<GlobalReject>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<GlobalReject>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<GlobalReject>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.24.0
   * Query Engine version: f3e341280d96d0abc068f97e959ddf01f321a858
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    accounts: 'accounts',
    categories: 'categories',
    orders: 'orders',
    posts: 'posts',
    products: 'products',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model accounts
   */


  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
    max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountsSumAggregateOutputType = {
    id: number | null
  }

  export type AccountsMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    id?: true
  }

  export type AccountsSumAggregateInputType = {
    id?: true
  }

  export type AccountsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AccountsAggregateArgs = {
    /**
     * Filter which accounts to aggregate.
     * 
    **/
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<accountsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }


    
    
  export type AccountsGroupByArgs = {
    where?: accountsWhereInput
    orderBy?: Enumerable<accountsOrderByInput>
    by: Array<AccountsScalarFieldEnum>
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }


  export type AccountsGroupByOutputType = {
    id: number
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = Promise<
    Array<
      PickArray<AccountsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AccountsGroupByOutputType[P]> 
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      > 
    >


  export type accountsSelect = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    orders?: boolean | ordersFindManyArgs
    posts?: boolean | postsFindManyArgs
    products?: boolean | productsFindManyArgs
    users?: boolean | usersFindManyArgs
  }

  export type accountsInclude = {
    orders?: boolean | ordersFindManyArgs
    posts?: boolean | postsFindManyArgs
    products?: boolean | productsFindManyArgs
    users?: boolean | usersFindManyArgs
  }

  export type accountsGetPayload<
    S extends boolean | null | undefined | accountsArgs,
    U = keyof S
      > = S extends true
        ? accounts
    : S extends undefined
    ? never
    : S extends accountsArgs | accountsFindManyArgs
    ?'include' extends U
    ? accounts  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'orders'
        ? Array < ordersGetPayload<S['include'][P]>>  :
        P extends 'posts'
        ? Array < postsGetPayload<S['include'][P]>>  :
        P extends 'products'
        ? Array < productsGetPayload<S['include'][P]>>  :
        P extends 'users'
        ? Array < usersGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof accounts ?accounts [P]
  : 
          P extends 'orders'
        ? Array < ordersGetPayload<S['select'][P]>>  :
        P extends 'posts'
        ? Array < postsGetPayload<S['select'][P]>>  :
        P extends 'products'
        ? Array < productsGetPayload<S['select'][P]>>  :
        P extends 'users'
        ? Array < usersGetPayload<S['select'][P]>>  : never
  } 
    : accounts
  : accounts


  type accountsCountArgs = Merge<
    Omit<accountsFindManyArgs, 'select' | 'include'> & {
      select?: AccountsCountAggregateInputType | true
    }
  >

  export interface accountsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends accountsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, accountsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'accounts'> extends True ? CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>> : CheckSelect<T, Prisma__accountsClient<accounts | null >, Prisma__accountsClient<accountsGetPayload<T> | null >>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends accountsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, accountsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'accounts'> extends True ? CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>> : CheckSelect<T, Prisma__accountsClient<accounts | null >, Prisma__accountsClient<accountsGetPayload<T> | null >>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends accountsFindManyArgs>(
      args?: SelectSubset<T, accountsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<accounts>>, PrismaPromise<Array<accountsGetPayload<T>>>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
    **/
    create<T extends accountsCreateArgs>(
      args: SelectSubset<T, accountsCreateArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>>

    /**
     * Create many Accounts.
     *     @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const accounts = await prisma.accounts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends accountsCreateManyArgs>(
      args?: SelectSubset<T, accountsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
    **/
    delete<T extends accountsDeleteArgs>(
      args: SelectSubset<T, accountsDeleteArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends accountsUpdateArgs>(
      args: SelectSubset<T, accountsUpdateArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends accountsDeleteManyArgs>(
      args?: SelectSubset<T, accountsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends accountsUpdateManyArgs>(
      args: SelectSubset<T, accountsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
    **/
    upsert<T extends accountsUpsertArgs>(
      args: SelectSubset<T, accountsUpsertArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__accountsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    orders<T extends ordersFindManyArgs = {}>(args?: Subset<T, ordersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<orders>>, PrismaPromise<Array<ordersGetPayload<T>>>>;

    posts<T extends postsFindManyArgs = {}>(args?: Subset<T, postsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<posts>>, PrismaPromise<Array<postsGetPayload<T>>>>;

    products<T extends productsFindManyArgs = {}>(args?: Subset<T, productsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<products>>, PrismaPromise<Array<productsGetPayload<T>>>>;

    users<T extends usersFindManyArgs = {}>(args?: Subset<T, usersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the accounts
     * 
    **/
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: accountsInclude | null
    /**
     * Throw an Error if a accounts can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which accounts to fetch.
     * 
    **/
    where: accountsWhereUniqueInput
  }


  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the accounts
     * 
    **/
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: accountsInclude | null
    /**
     * Throw an Error if a accounts can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which accounts to fetch.
     * 
    **/
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<accountsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     * 
    **/
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     * 
    **/
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }


  /**
   * accounts findMany
   */
  export type accountsFindManyArgs = {
    /**
     * Select specific fields to fetch from the accounts
     * 
    **/
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: accountsInclude | null
    /**
     * Filter, which accounts to fetch.
     * 
    **/
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<accountsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     * 
    **/
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }


  /**
   * accounts create
   */
  export type accountsCreateArgs = {
    /**
     * Select specific fields to fetch from the accounts
     * 
    **/
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: accountsInclude | null
    /**
     * The data needed to create a accounts.
     * 
    **/
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }


  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs = {
    data: Enumerable<accountsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * accounts update
   */
  export type accountsUpdateArgs = {
    /**
     * Select specific fields to fetch from the accounts
     * 
    **/
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: accountsInclude | null
    /**
     * The data needed to update a accounts.
     * 
    **/
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     * 
    **/
    where: accountsWhereUniqueInput
  }


  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs = {
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    where?: accountsWhereInput
  }


  /**
   * accounts upsert
   */
  export type accountsUpsertArgs = {
    /**
     * Select specific fields to fetch from the accounts
     * 
    **/
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: accountsInclude | null
    /**
     * The filter to search for the accounts to update in case it exists.
     * 
    **/
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     * 
    **/
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }


  /**
   * accounts delete
   */
  export type accountsDeleteArgs = {
    /**
     * Select specific fields to fetch from the accounts
     * 
    **/
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: accountsInclude | null
    /**
     * Filter which accounts to delete.
     * 
    **/
    where: accountsWhereUniqueInput
  }


  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs = {
    where?: accountsWhereInput
  }


  /**
   * accounts without action
   */
  export type accountsArgs = {
    /**
     * Select specific fields to fetch from the accounts
     * 
    **/
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: accountsInclude | null
  }



  /**
   * Model categories
   */


  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
    max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    specifications: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    specifications: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    specifications: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    specifications?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    specifications?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    specifications?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs = {
    /**
     * Filter which categories to aggregate.
     * 
    **/
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     * 
    **/
    orderBy?: Enumerable<categoriesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }


    
    
  export type CategoriesGroupByArgs = {
    where?: categoriesWhereInput
    orderBy?: Enumerable<categoriesOrderByInput>
    by: Array<CategoriesScalarFieldEnum>
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }


  export type CategoriesGroupByOutputType = {
    id: number
    name: string | null
    slug: string | null
    description: string | null
    specifications: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Promise<
    Array<
      PickArray<CategoriesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]> 
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      > 
    >


  export type categoriesSelect = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    specifications?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    posts?: boolean | postsFindManyArgs
    products?: boolean | productsFindManyArgs
  }

  export type categoriesInclude = {
    posts?: boolean | postsFindManyArgs
    products?: boolean | productsFindManyArgs
  }

  export type categoriesGetPayload<
    S extends boolean | null | undefined | categoriesArgs,
    U = keyof S
      > = S extends true
        ? categories
    : S extends undefined
    ? never
    : S extends categoriesArgs | categoriesFindManyArgs
    ?'include' extends U
    ? categories  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'posts'
        ? Array < postsGetPayload<S['include'][P]>>  :
        P extends 'products'
        ? Array < productsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof categories ?categories [P]
  : 
          P extends 'posts'
        ? Array < postsGetPayload<S['select'][P]>>  :
        P extends 'products'
        ? Array < productsGetPayload<S['select'][P]>>  : never
  } 
    : categories
  : categories


  type categoriesCountArgs = Merge<
    Omit<categoriesFindManyArgs, 'select' | 'include'> & {
      select?: CategoriesCountAggregateInputType | true
    }
  >

  export interface categoriesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoriesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categoriesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'categories'> extends True ? CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>> : CheckSelect<T, Prisma__categoriesClient<categories | null >, Prisma__categoriesClient<categoriesGetPayload<T> | null >>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoriesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categoriesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'categories'> extends True ? CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>> : CheckSelect<T, Prisma__categoriesClient<categories | null >, Prisma__categoriesClient<categoriesGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoriesFindManyArgs>(
      args?: SelectSubset<T, categoriesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<categories>>, PrismaPromise<Array<categoriesGetPayload<T>>>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
    **/
    create<T extends categoriesCreateArgs>(
      args: SelectSubset<T, categoriesCreateArgs>
    ): CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categories = await prisma.categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoriesCreateManyArgs>(
      args?: SelectSubset<T, categoriesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
    **/
    delete<T extends categoriesDeleteArgs>(
      args: SelectSubset<T, categoriesDeleteArgs>
    ): CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoriesUpdateArgs>(
      args: SelectSubset<T, categoriesUpdateArgs>
    ): CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoriesDeleteManyArgs>(
      args?: SelectSubset<T, categoriesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoriesUpdateManyArgs>(
      args: SelectSubset<T, categoriesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
    **/
    upsert<T extends categoriesUpsertArgs>(
      args: SelectSubset<T, categoriesUpsertArgs>
    ): CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categoriesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    posts<T extends postsFindManyArgs = {}>(args?: Subset<T, postsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<posts>>, PrismaPromise<Array<postsGetPayload<T>>>>;

    products<T extends productsFindManyArgs = {}>(args?: Subset<T, productsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<products>>, PrismaPromise<Array<productsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * Throw an Error if a categories can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which categories to fetch.
     * 
    **/
    where: categoriesWhereUniqueInput
  }


  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * Throw an Error if a categories can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which categories to fetch.
     * 
    **/
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     * 
    **/
    orderBy?: Enumerable<categoriesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     * 
    **/
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     * 
    **/
    distinct?: Enumerable<CategoriesScalarFieldEnum>
  }


  /**
   * categories findMany
   */
  export type categoriesFindManyArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * Filter, which categories to fetch.
     * 
    **/
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     * 
    **/
    orderBy?: Enumerable<categoriesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     * 
    **/
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoriesScalarFieldEnum>
  }


  /**
   * categories create
   */
  export type categoriesCreateArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * The data needed to create a categories.
     * 
    **/
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }


  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs = {
    data: Enumerable<categoriesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * categories update
   */
  export type categoriesUpdateArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * The data needed to update a categories.
     * 
    **/
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     * 
    **/
    where: categoriesWhereUniqueInput
  }


  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs = {
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    where?: categoriesWhereInput
  }


  /**
   * categories upsert
   */
  export type categoriesUpsertArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * The filter to search for the categories to update in case it exists.
     * 
    **/
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     * 
    **/
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }


  /**
   * categories delete
   */
  export type categoriesDeleteArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * Filter which categories to delete.
     * 
    **/
    where: categoriesWhereUniqueInput
  }


  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs = {
    where?: categoriesWhereInput
  }


  /**
   * categories without action
   */
  export type categoriesArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
  }



  /**
   * Model orders
   */


  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
    max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    account_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    account_id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    account_id: number | null
    order_details: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    account_id: number | null
    order_details: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    account_id: number
    order_details: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    user_id?: true
    account_id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    user_id?: true
    account_id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    account_id?: true
    order_details?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    account_id?: true
    order_details?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    account_id?: true
    order_details?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs = {
    /**
     * Filter which orders to aggregate.
     * 
    **/
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     * 
    **/
    orderBy?: Enumerable<ordersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }


    
    
  export type OrdersGroupByArgs = {
    where?: ordersWhereInput
    orderBy?: Enumerable<ordersOrderByInput>
    by: Array<OrdersScalarFieldEnum>
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }


  export type OrdersGroupByOutputType = {
    id: number
    user_id: number
    account_id: number
    order_details: string
    status: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Promise<
    Array<
      PickArray<OrdersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], OrdersGroupByOutputType[P]> 
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      > 
    >


  export type ordersSelect = {
    id?: boolean
    user_id?: boolean
    account_id?: boolean
    order_details?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    accounts?: boolean | accountsArgs
    users?: boolean | usersArgs
  }

  export type ordersInclude = {
    accounts?: boolean | accountsArgs
    users?: boolean | usersArgs
  }

  export type ordersGetPayload<
    S extends boolean | null | undefined | ordersArgs,
    U = keyof S
      > = S extends true
        ? orders
    : S extends undefined
    ? never
    : S extends ordersArgs | ordersFindManyArgs
    ?'include' extends U
    ? orders  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'accounts'
        ? accountsGetPayload<S['include'][P]> :
        P extends 'users'
        ? usersGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof orders ?orders [P]
  : 
          P extends 'accounts'
        ? accountsGetPayload<S['select'][P]> :
        P extends 'users'
        ? usersGetPayload<S['select'][P]> : never
  } 
    : orders
  : orders


  type ordersCountArgs = Merge<
    Omit<ordersFindManyArgs, 'select' | 'include'> & {
      select?: OrdersCountAggregateInputType | true
    }
  >

  export interface ordersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ordersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ordersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'orders'> extends True ? CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>> : CheckSelect<T, Prisma__ordersClient<orders | null >, Prisma__ordersClient<ordersGetPayload<T> | null >>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ordersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ordersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'orders'> extends True ? CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>> : CheckSelect<T, Prisma__ordersClient<orders | null >, Prisma__ordersClient<ordersGetPayload<T> | null >>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ordersFindManyArgs>(
      args?: SelectSubset<T, ordersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<orders>>, PrismaPromise<Array<ordersGetPayload<T>>>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends ordersCreateArgs>(
      args: SelectSubset<T, ordersCreateArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Create many Orders.
     *     @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ordersCreateManyArgs>(
      args?: SelectSubset<T, ordersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends ordersDeleteArgs>(
      args: SelectSubset<T, ordersDeleteArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ordersUpdateArgs>(
      args: SelectSubset<T, ordersUpdateArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ordersDeleteManyArgs>(
      args?: SelectSubset<T, ordersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ordersUpdateManyArgs>(
      args: SelectSubset<T, ordersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends ordersUpsertArgs>(
      args: SelectSubset<T, ordersUpsertArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ordersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends accountsArgs = {}>(args?: Subset<T, accountsArgs>): CheckSelect<T, Prisma__accountsClient<accounts | null >, Prisma__accountsClient<accountsGetPayload<T> | null >>;

    users<T extends usersArgs = {}>(args?: Subset<T, usersArgs>): CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * Throw an Error if a orders can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which orders to fetch.
     * 
    **/
    where: ordersWhereUniqueInput
  }


  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * Throw an Error if a orders can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which orders to fetch.
     * 
    **/
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     * 
    **/
    orderBy?: Enumerable<ordersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     * 
    **/
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     * 
    **/
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * orders findMany
   */
  export type ordersFindManyArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     * 
    **/
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     * 
    **/
    orderBy?: Enumerable<ordersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     * 
    **/
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * orders create
   */
  export type ordersCreateArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * The data needed to create a orders.
     * 
    **/
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }


  /**
   * orders createMany
   */
  export type ordersCreateManyArgs = {
    data: Enumerable<ordersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * orders update
   */
  export type ordersUpdateArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * The data needed to update a orders.
     * 
    **/
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     * 
    **/
    where: ordersWhereUniqueInput
  }


  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs = {
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    where?: ordersWhereInput
  }


  /**
   * orders upsert
   */
  export type ordersUpsertArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * The filter to search for the orders to update in case it exists.
     * 
    **/
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     * 
    **/
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }


  /**
   * orders delete
   */
  export type ordersDeleteArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * Filter which orders to delete.
     * 
    **/
    where: ordersWhereUniqueInput
  }


  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs = {
    where?: ordersWhereInput
  }


  /**
   * orders without action
   */
  export type ordersArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
  }



  /**
   * Model posts
   */


  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
    max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
    user_id: number | null
    category_id: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    account_id: number | null
    user_id: number | null
    category_id: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    user_id: number | null
    category_id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    description: string | null
    tags: string | null
    metadata: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    user_id: number | null
    category_id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    description: string | null
    tags: string | null
    metadata: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    account_id: number
    user_id: number
    category_id: number
    title: number
    slug: number
    excerpt: number
    description: number
    tags: number
    metadata: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
    title?: true
    slug?: true
    excerpt?: true
    description?: true
    tags?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
    title?: true
    slug?: true
    excerpt?: true
    description?: true
    tags?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
    title?: true
    slug?: true
    excerpt?: true
    description?: true
    tags?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type PostsAggregateArgs = {
    /**
     * Filter which posts to aggregate.
     * 
    **/
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }


    
    
  export type PostsGroupByArgs = {
    where?: postsWhereInput
    orderBy?: Enumerable<postsOrderByInput>
    by: Array<PostsScalarFieldEnum>
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }


  export type PostsGroupByOutputType = {
    id: number
    account_id: number
    user_id: number
    category_id: number
    title: string
    slug: string
    excerpt: string
    description: string | null
    tags: string | null
    metadata: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Promise<
    Array<
      PickArray<PostsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PostsGroupByOutputType[P]> 
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      > 
    >


  export type postsSelect = {
    id?: boolean
    account_id?: boolean
    user_id?: boolean
    category_id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    description?: boolean
    tags?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    accounts?: boolean | accountsArgs
    categories?: boolean | categoriesArgs
    users?: boolean | usersArgs
  }

  export type postsInclude = {
    accounts?: boolean | accountsArgs
    categories?: boolean | categoriesArgs
    users?: boolean | usersArgs
  }

  export type postsGetPayload<
    S extends boolean | null | undefined | postsArgs,
    U = keyof S
      > = S extends true
        ? posts
    : S extends undefined
    ? never
    : S extends postsArgs | postsFindManyArgs
    ?'include' extends U
    ? posts  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'accounts'
        ? accountsGetPayload<S['include'][P]> :
        P extends 'categories'
        ? categoriesGetPayload<S['include'][P]> :
        P extends 'users'
        ? usersGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof posts ?posts [P]
  : 
          P extends 'accounts'
        ? accountsGetPayload<S['select'][P]> :
        P extends 'categories'
        ? categoriesGetPayload<S['select'][P]> :
        P extends 'users'
        ? usersGetPayload<S['select'][P]> : never
  } 
    : posts
  : posts


  type postsCountArgs = Merge<
    Omit<postsFindManyArgs, 'select' | 'include'> & {
      select?: PostsCountAggregateInputType | true
    }
  >

  export interface postsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, postsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'posts'> extends True ? CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>> : CheckSelect<T, Prisma__postsClient<posts | null >, Prisma__postsClient<postsGetPayload<T> | null >>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, postsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'posts'> extends True ? CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>> : CheckSelect<T, Prisma__postsClient<posts | null >, Prisma__postsClient<postsGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends postsFindManyArgs>(
      args?: SelectSubset<T, postsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<posts>>, PrismaPromise<Array<postsGetPayload<T>>>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
    **/
    create<T extends postsCreateArgs>(
      args: SelectSubset<T, postsCreateArgs>
    ): CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {postsCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const posts = await prisma.posts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postsCreateManyArgs>(
      args?: SelectSubset<T, postsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
    **/
    delete<T extends postsDeleteArgs>(
      args: SelectSubset<T, postsDeleteArgs>
    ): CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postsUpdateArgs>(
      args: SelectSubset<T, postsUpdateArgs>
    ): CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postsDeleteManyArgs>(
      args?: SelectSubset<T, postsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postsUpdateManyArgs>(
      args: SelectSubset<T, postsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
    **/
    upsert<T extends postsUpsertArgs>(
      args: SelectSubset<T, postsUpsertArgs>
    ): CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__postsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends accountsArgs = {}>(args?: Subset<T, accountsArgs>): CheckSelect<T, Prisma__accountsClient<accounts | null >, Prisma__accountsClient<accountsGetPayload<T> | null >>;

    categories<T extends categoriesArgs = {}>(args?: Subset<T, categoriesArgs>): CheckSelect<T, Prisma__categoriesClient<categories | null >, Prisma__categoriesClient<categoriesGetPayload<T> | null >>;

    users<T extends usersArgs = {}>(args?: Subset<T, usersArgs>): CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the posts
     * 
    **/
    select?: postsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postsInclude | null
    /**
     * Throw an Error if a posts can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which posts to fetch.
     * 
    **/
    where: postsWhereUniqueInput
  }


  /**
   * posts findFirst
   */
  export type postsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the posts
     * 
    **/
    select?: postsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postsInclude | null
    /**
     * Throw an Error if a posts can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which posts to fetch.
     * 
    **/
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     * 
    **/
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     * 
    **/
    distinct?: Enumerable<PostsScalarFieldEnum>
  }


  /**
   * posts findMany
   */
  export type postsFindManyArgs = {
    /**
     * Select specific fields to fetch from the posts
     * 
    **/
    select?: postsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postsInclude | null
    /**
     * Filter, which posts to fetch.
     * 
    **/
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     * 
    **/
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostsScalarFieldEnum>
  }


  /**
   * posts create
   */
  export type postsCreateArgs = {
    /**
     * Select specific fields to fetch from the posts
     * 
    **/
    select?: postsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postsInclude | null
    /**
     * The data needed to create a posts.
     * 
    **/
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }


  /**
   * posts createMany
   */
  export type postsCreateManyArgs = {
    data: Enumerable<postsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * posts update
   */
  export type postsUpdateArgs = {
    /**
     * Select specific fields to fetch from the posts
     * 
    **/
    select?: postsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postsInclude | null
    /**
     * The data needed to update a posts.
     * 
    **/
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     * 
    **/
    where: postsWhereUniqueInput
  }


  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs = {
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    where?: postsWhereInput
  }


  /**
   * posts upsert
   */
  export type postsUpsertArgs = {
    /**
     * Select specific fields to fetch from the posts
     * 
    **/
    select?: postsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postsInclude | null
    /**
     * The filter to search for the posts to update in case it exists.
     * 
    **/
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     * 
    **/
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }


  /**
   * posts delete
   */
  export type postsDeleteArgs = {
    /**
     * Select specific fields to fetch from the posts
     * 
    **/
    select?: postsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postsInclude | null
    /**
     * Filter which posts to delete.
     * 
    **/
    where: postsWhereUniqueInput
  }


  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs = {
    where?: postsWhereInput
  }


  /**
   * posts without action
   */
  export type postsArgs = {
    /**
     * Select specific fields to fetch from the posts
     * 
    **/
    select?: postsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postsInclude | null
  }



  /**
   * Model products
   */


  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
    max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
    user_id: number | null
    category_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    account_id: number | null
    user_id: number | null
    category_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    user_id: number | null
    category_id: number | null
    product: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    user_id: number | null
    category_id: number | null
    product: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    account_id: number
    user_id: number
    category_id: number
    product: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
    product?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
    product?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    account_id?: true
    user_id?: true
    category_id?: true
    product?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs = {
    /**
     * Filter which products to aggregate.
     * 
    **/
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }


    
    
  export type ProductsGroupByArgs = {
    where?: productsWhereInput
    orderBy?: Enumerable<productsOrderByInput>
    by: Array<ProductsScalarFieldEnum>
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }


  export type ProductsGroupByOutputType = {
    id: number
    account_id: number
    user_id: number
    category_id: number
    product: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Promise<
    Array<
      PickArray<ProductsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ProductsGroupByOutputType[P]> 
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      > 
    >


  export type productsSelect = {
    id?: boolean
    account_id?: boolean
    user_id?: boolean
    category_id?: boolean
    product?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    accounts?: boolean | accountsArgs
    categories?: boolean | categoriesArgs
    users?: boolean | usersArgs
  }

  export type productsInclude = {
    accounts?: boolean | accountsArgs
    categories?: boolean | categoriesArgs
    users?: boolean | usersArgs
  }

  export type productsGetPayload<
    S extends boolean | null | undefined | productsArgs,
    U = keyof S
      > = S extends true
        ? products
    : S extends undefined
    ? never
    : S extends productsArgs | productsFindManyArgs
    ?'include' extends U
    ? products  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'accounts'
        ? accountsGetPayload<S['include'][P]> :
        P extends 'categories'
        ? categoriesGetPayload<S['include'][P]> :
        P extends 'users'
        ? usersGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof products ?products [P]
  : 
          P extends 'accounts'
        ? accountsGetPayload<S['select'][P]> :
        P extends 'categories'
        ? categoriesGetPayload<S['select'][P]> :
        P extends 'users'
        ? usersGetPayload<S['select'][P]> : never
  } 
    : products
  : products


  type productsCountArgs = Merge<
    Omit<productsFindManyArgs, 'select' | 'include'> & {
      select?: ProductsCountAggregateInputType | true
    }
  >

  export interface productsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'products'> extends True ? CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>> : CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'products'> extends True ? CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>> : CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productsFindManyArgs>(
      args?: SelectSubset<T, productsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<products>>, PrismaPromise<Array<productsGetPayload<T>>>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends productsCreateArgs>(
      args: SelectSubset<T, productsCreateArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Create many Products.
     *     @param {productsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productsCreateManyArgs>(
      args?: SelectSubset<T, productsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends productsDeleteArgs>(
      args: SelectSubset<T, productsDeleteArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productsUpdateArgs>(
      args: SelectSubset<T, productsUpdateArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productsDeleteManyArgs>(
      args?: SelectSubset<T, productsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productsUpdateManyArgs>(
      args: SelectSubset<T, productsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends productsUpsertArgs>(
      args: SelectSubset<T, productsUpsertArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends accountsArgs = {}>(args?: Subset<T, accountsArgs>): CheckSelect<T, Prisma__accountsClient<accounts | null >, Prisma__accountsClient<accountsGetPayload<T> | null >>;

    categories<T extends categoriesArgs = {}>(args?: Subset<T, categoriesArgs>): CheckSelect<T, Prisma__categoriesClient<categories | null >, Prisma__categoriesClient<categoriesGetPayload<T> | null >>;

    users<T extends usersArgs = {}>(args?: Subset<T, usersArgs>): CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * products findUnique
   */
  export type productsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Throw an Error if a products can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which products to fetch.
     * 
    **/
    where: productsWhereUniqueInput
  }


  /**
   * products findFirst
   */
  export type productsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Throw an Error if a products can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which products to fetch.
     * 
    **/
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     * 
    **/
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     * 
    **/
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products findMany
   */
  export type productsFindManyArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     * 
    **/
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     * 
    **/
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products create
   */
  export type productsCreateArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * The data needed to create a products.
     * 
    **/
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }


  /**
   * products createMany
   */
  export type productsCreateManyArgs = {
    data: Enumerable<productsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * products update
   */
  export type productsUpdateArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * The data needed to update a products.
     * 
    **/
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     * 
    **/
    where: productsWhereUniqueInput
  }


  /**
   * products updateMany
   */
  export type productsUpdateManyArgs = {
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    where?: productsWhereInput
  }


  /**
   * products upsert
   */
  export type productsUpsertArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * The filter to search for the products to update in case it exists.
     * 
    **/
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     * 
    **/
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }


  /**
   * products delete
   */
  export type productsDeleteArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Filter which products to delete.
     * 
    **/
    where: productsWhereUniqueInput
  }


  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs = {
    where?: productsWhereInput
  }


  /**
   * products without action
   */
  export type productsArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
    max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    email: string | null
    phone: string | null
    name: string | null
    email_verified_at: Date | null
    password: string | null
    provider: string | null
    provider_id: string | null
    owner: boolean | null
    metadata: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    email: string | null
    phone: string | null
    name: string | null
    email_verified_at: Date | null
    password: string | null
    provider: string | null
    provider_id: string | null
    owner: boolean | null
    metadata: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    account_id: number
    email: number
    phone: number
    name: number
    email_verified_at: number
    password: number
    provider: number
    provider_id: number
    owner: number
    metadata: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    account_id?: true
    email?: true
    phone?: true
    name?: true
    email_verified_at?: true
    password?: true
    provider?: true
    provider_id?: true
    owner?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    account_id?: true
    email?: true
    phone?: true
    name?: true
    email_verified_at?: true
    password?: true
    provider?: true
    provider_id?: true
    owner?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    account_id?: true
    email?: true
    phone?: true
    name?: true
    email_verified_at?: true
    password?: true
    provider?: true
    provider_id?: true
    owner?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }


    
    
  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    account_id: number
    email: string
    phone: string | null
    name: string
    email_verified_at: Date | null
    password: string | null
    provider: string | null
    provider_id: string | null
    owner: boolean
    metadata: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Promise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UsersGroupByOutputType[P]> 
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      > 
    >


  export type usersSelect = {
    id?: boolean
    account_id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    email_verified_at?: boolean
    password?: boolean
    provider?: boolean
    provider_id?: boolean
    owner?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    accounts?: boolean | accountsArgs
    orders?: boolean | ordersFindManyArgs
    posts?: boolean | postsFindManyArgs
    products?: boolean | productsFindManyArgs
  }

  export type usersInclude = {
    accounts?: boolean | accountsArgs
    orders?: boolean | ordersFindManyArgs
    posts?: boolean | postsFindManyArgs
    products?: boolean | productsFindManyArgs
  }

  export type usersGetPayload<
    S extends boolean | null | undefined | usersArgs,
    U = keyof S
      > = S extends true
        ? users
    : S extends undefined
    ? never
    : S extends usersArgs | usersFindManyArgs
    ?'include' extends U
    ? users  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'accounts'
        ? accountsGetPayload<S['include'][P]> :
        P extends 'orders'
        ? Array < ordersGetPayload<S['include'][P]>>  :
        P extends 'posts'
        ? Array < postsGetPayload<S['include'][P]>>  :
        P extends 'products'
        ? Array < productsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof users ?users [P]
  : 
          P extends 'accounts'
        ? accountsGetPayload<S['select'][P]> :
        P extends 'orders'
        ? Array < ordersGetPayload<S['select'][P]>>  :
        P extends 'posts'
        ? Array < postsGetPayload<S['select'][P]>>  :
        P extends 'products'
        ? Array < productsGetPayload<S['select'][P]>>  : never
  } 
    : users
  : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends accountsArgs = {}>(args?: Subset<T, accountsArgs>): CheckSelect<T, Prisma__accountsClient<accounts | null >, Prisma__accountsClient<accountsGetPayload<T> | null >>;

    orders<T extends ordersFindManyArgs = {}>(args?: Subset<T, ordersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<orders>>, PrismaPromise<Array<ordersGetPayload<T>>>>;

    posts<T extends postsFindManyArgs = {}>(args?: Subset<T, postsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<posts>>, PrismaPromise<Array<postsGetPayload<T>>>>;

    products<T extends productsFindManyArgs = {}>(args?: Subset<T, productsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<products>>, PrismaPromise<Array<productsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Throw an Error if a users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Throw an Error if a users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    specifications: 'specifications',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    account_id: 'account_id',
    order_details: 'order_details',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    user_id: 'user_id',
    category_id: 'category_id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    description: 'description',
    tags: 'tags',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    user_id: 'user_id',
    category_id: 'category_id',
    product: 'product',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    email: 'email',
    phone: 'phone',
    name: 'name',
    email_verified_at: 'email_verified_at',
    password: 'password',
    provider: 'provider',
    provider_id: 'provider_id',
    owner: 'owner',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type accountsWhereInput = {
    AND?: Enumerable<accountsWhereInput>
    OR?: Enumerable<accountsWhereInput>
    NOT?: Enumerable<accountsWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    orders?: OrdersListRelationFilter
    posts?: PostsListRelationFilter
    products?: ProductsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type accountsOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type accountsWhereUniqueInput = {
    id?: number
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<accountsScalarWhereWithAggregatesInput>
    OR?: Enumerable<accountsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<accountsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type categoriesWhereInput = {
    AND?: Enumerable<categoriesWhereInput>
    OR?: Enumerable<categoriesWhereInput>
    NOT?: Enumerable<categoriesWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    slug?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    specifications?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    posts?: PostsListRelationFilter
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    specifications?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type categoriesWhereUniqueInput = {
    id?: number
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categoriesScalarWhereWithAggregatesInput>
    OR?: Enumerable<categoriesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categoriesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    slug?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    specifications?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ordersWhereInput = {
    AND?: Enumerable<ordersWhereInput>
    OR?: Enumerable<ordersWhereInput>
    NOT?: Enumerable<ordersWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    account_id?: IntFilter | number
    order_details?: StringFilter | string
    status?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type ordersOrderByInput = {
    id?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    order_details?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ordersWhereUniqueInput = {
    id?: number
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ordersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ordersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ordersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    account_id?: IntWithAggregatesFilter | number
    order_details?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type postsWhereInput = {
    AND?: Enumerable<postsWhereInput>
    OR?: Enumerable<postsWhereInput>
    NOT?: Enumerable<postsWhereInput>
    id?: IntFilter | number
    account_id?: IntFilter | number
    user_id?: IntFilter | number
    category_id?: IntFilter | number
    title?: StringFilter | string
    slug?: StringFilter | string
    excerpt?: StringFilter | string
    description?: StringNullableFilter | string | null
    tags?: StringNullableFilter | string | null
    metadata?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
    categories?: XOR<CategoriesRelationFilter, categoriesWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type postsOrderByInput = {
    id?: SortOrder
    account_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type postsWhereUniqueInput = {
    id?: number
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<postsScalarWhereWithAggregatesInput>
    OR?: Enumerable<postsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<postsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    account_id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    category_id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    excerpt?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    tags?: StringNullableWithAggregatesFilter | string | null
    metadata?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type productsWhereInput = {
    AND?: Enumerable<productsWhereInput>
    OR?: Enumerable<productsWhereInput>
    NOT?: Enumerable<productsWhereInput>
    id?: IntFilter | number
    account_id?: IntFilter | number
    user_id?: IntFilter | number
    category_id?: IntFilter | number
    product?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
    categories?: XOR<CategoriesRelationFilter, categoriesWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type productsOrderByInput = {
    id?: SortOrder
    account_id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    product?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type productsWhereUniqueInput = {
    id?: number
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productsScalarWhereWithAggregatesInput>
    OR?: Enumerable<productsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    account_id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    category_id?: IntWithAggregatesFilter | number
    product?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: IntFilter | number
    account_id?: IntFilter | number
    email?: StringFilter | string
    phone?: StringNullableFilter | string | null
    name?: StringFilter | string
    email_verified_at?: DateTimeNullableFilter | Date | string | null
    password?: StringNullableFilter | string | null
    provider?: StringNullableFilter | string | null
    provider_id?: StringNullableFilter | string | null
    owner?: BoolFilter | boolean
    metadata?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
    orders?: OrdersListRelationFilter
    posts?: PostsListRelationFilter
    products?: ProductsListRelationFilter
  }

  export type usersOrderByInput = {
    id?: SortOrder
    account_id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    provider_id?: SortOrder
    owner?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersWhereUniqueInput = {
    id?: number
    email?: string
    phone?: string
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    account_id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    phone?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    email_verified_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    provider?: StringNullableWithAggregatesFilter | string | null
    provider_id?: StringNullableWithAggregatesFilter | string | null
    owner?: BoolWithAggregatesFilter | boolean
    metadata?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type accountsCreateInput = {
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutAccountsInput
    posts?: postsCreateNestedManyWithoutAccountsInput
    products?: productsCreateNestedManyWithoutAccountsInput
    users?: usersCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutAccountsInput
    posts?: postsUncheckedCreateNestedManyWithoutAccountsInput
    products?: productsUncheckedCreateNestedManyWithoutAccountsInput
    users?: usersUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutAccountsInput
    posts?: postsUpdateManyWithoutAccountsInput
    products?: productsUpdateManyWithoutAccountsInput
    users?: usersUpdateManyWithoutAccountsInput
  }

  export type accountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutAccountsInput
    posts?: postsUncheckedUpdateManyWithoutAccountsInput
    products?: productsUncheckedUpdateManyWithoutAccountsInput
    users?: usersUncheckedUpdateManyWithoutAccountsInput
  }

  export type accountsCreateManyInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type accountsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateInput = {
    name?: string | null
    slug?: string | null
    description?: string | null
    specifications?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    posts?: postsCreateNestedManyWithoutCategoriesInput
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name?: string | null
    slug?: string | null
    description?: string | null
    specifications?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    posts?: postsUncheckedCreateNestedManyWithoutCategoriesInput
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateManyWithoutCategoriesInput
    products?: productsUpdateManyWithoutCategoriesInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUncheckedUpdateManyWithoutCategoriesInput
    products?: productsUncheckedUpdateManyWithoutCategoriesInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name?: string | null
    slug?: string | null
    description?: string | null
    specifications?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateInput = {
    order_details: string
    status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    user_id: number
    account_id: number
    order_details: string
    status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ordersUpdateInput = {
    order_details?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutOrdersInput
    users?: usersUpdateOneRequiredWithoutOrdersInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    order_details?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateManyInput = {
    id?: number
    user_id: number
    account_id: number
    order_details: string
    status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    order_details?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    order_details?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsCreateInput = {
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutPostsInput
    categories: categoriesCreateNestedOneWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateInput = {
    id?: number
    account_id: number
    user_id: number
    category_id: number
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type postsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutPostsInput
    categories?: categoriesUpdateOneRequiredWithoutPostsInput
    users?: usersUpdateOneRequiredWithoutPostsInput
  }

  export type postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsCreateManyInput = {
    id?: number
    account_id: number
    user_id: number
    category_id: number
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type postsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    users: usersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    account_id: number
    user_id: number
    category_id: number
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsUpdateInput = {
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutProductsInput
    categories?: categoriesUpdateOneRequiredWithoutProductsInput
    users?: usersUpdateOneRequiredWithoutProductsInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateManyInput = {
    id?: number
    account_id: number
    user_id: number
    category_id: number
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    account_id: number
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutUsersInput
    orders?: ordersUpdateManyWithoutUsersInput
    posts?: postsUpdateManyWithoutUsersInput
    products?: productsUpdateManyWithoutUsersInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutUsersInput
    posts?: postsUncheckedUpdateManyWithoutUsersInput
    products?: productsUncheckedUpdateManyWithoutUsersInput
  }

  export type usersCreateManyInput = {
    id?: number
    account_id: number
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type AccountsRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type CategoriesRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type ordersCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<ordersCreateWithoutAccountsInput>, Enumerable<ordersUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutAccountsInput>
    createMany?: ordersCreateManyAccountsInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type postsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<postsCreateWithoutAccountsInput>, Enumerable<postsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutAccountsInput>
    createMany?: postsCreateManyAccountsInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
  }

  export type productsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<productsCreateWithoutAccountsInput>, Enumerable<productsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutAccountsInput>
    createMany?: productsCreateManyAccountsInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type usersCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<usersCreateWithoutAccountsInput>, Enumerable<usersUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutAccountsInput>
    createMany?: usersCreateManyAccountsInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type ordersUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<ordersCreateWithoutAccountsInput>, Enumerable<ordersUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutAccountsInput>
    createMany?: ordersCreateManyAccountsInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type postsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<postsCreateWithoutAccountsInput>, Enumerable<postsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutAccountsInput>
    createMany?: postsCreateManyAccountsInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
  }

  export type productsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<productsCreateWithoutAccountsInput>, Enumerable<productsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutAccountsInput>
    createMany?: productsCreateManyAccountsInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<usersCreateWithoutAccountsInput>, Enumerable<usersUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutAccountsInput>
    createMany?: usersCreateManyAccountsInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ordersUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<ordersCreateWithoutAccountsInput>, Enumerable<ordersUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: ordersCreateManyAccountsInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type postsUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<postsCreateWithoutAccountsInput>, Enumerable<postsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<postsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: postsCreateManyAccountsInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
    set?: Enumerable<postsWhereUniqueInput>
    disconnect?: Enumerable<postsWhereUniqueInput>
    delete?: Enumerable<postsWhereUniqueInput>
    update?: Enumerable<postsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<postsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<postsScalarWhereInput>
  }

  export type productsUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<productsCreateWithoutAccountsInput>, Enumerable<productsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: productsCreateManyAccountsInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type usersUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<usersCreateWithoutAccountsInput>, Enumerable<usersUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: usersCreateManyAccountsInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUncheckedUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<ordersCreateWithoutAccountsInput>, Enumerable<ordersUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: ordersCreateManyAccountsInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type postsUncheckedUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<postsCreateWithoutAccountsInput>, Enumerable<postsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<postsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: postsCreateManyAccountsInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
    set?: Enumerable<postsWhereUniqueInput>
    disconnect?: Enumerable<postsWhereUniqueInput>
    delete?: Enumerable<postsWhereUniqueInput>
    update?: Enumerable<postsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<postsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<postsScalarWhereInput>
  }

  export type productsUncheckedUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<productsCreateWithoutAccountsInput>, Enumerable<productsUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: productsCreateManyAccountsInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<usersCreateWithoutAccountsInput>, Enumerable<usersUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutAccountsInput>
    createMany?: usersCreateManyAccountsInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type postsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<postsCreateWithoutCategoriesInput>, Enumerable<postsUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutCategoriesInput>
    createMany?: postsCreateManyCategoriesInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<productsCreateWithoutCategoriesInput>, Enumerable<productsUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutCategoriesInput>
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type postsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<postsCreateWithoutCategoriesInput>, Enumerable<postsUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutCategoriesInput>
    createMany?: postsCreateManyCategoriesInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<productsCreateWithoutCategoriesInput>, Enumerable<productsUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutCategoriesInput>
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type postsUpdateManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<postsCreateWithoutCategoriesInput>, Enumerable<postsUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutCategoriesInput>
    upsert?: Enumerable<postsUpsertWithWhereUniqueWithoutCategoriesInput>
    createMany?: postsCreateManyCategoriesInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
    set?: Enumerable<postsWhereUniqueInput>
    disconnect?: Enumerable<postsWhereUniqueInput>
    delete?: Enumerable<postsWhereUniqueInput>
    update?: Enumerable<postsUpdateWithWhereUniqueWithoutCategoriesInput>
    updateMany?: Enumerable<postsUpdateManyWithWhereWithoutCategoriesInput>
    deleteMany?: Enumerable<postsScalarWhereInput>
  }

  export type productsUpdateManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<productsCreateWithoutCategoriesInput>, Enumerable<productsUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutCategoriesInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutCategoriesInput>
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutCategoriesInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutCategoriesInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type postsUncheckedUpdateManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<postsCreateWithoutCategoriesInput>, Enumerable<postsUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutCategoriesInput>
    upsert?: Enumerable<postsUpsertWithWhereUniqueWithoutCategoriesInput>
    createMany?: postsCreateManyCategoriesInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
    set?: Enumerable<postsWhereUniqueInput>
    disconnect?: Enumerable<postsWhereUniqueInput>
    delete?: Enumerable<postsWhereUniqueInput>
    update?: Enumerable<postsUpdateWithWhereUniqueWithoutCategoriesInput>
    updateMany?: Enumerable<postsUpdateManyWithWhereWithoutCategoriesInput>
    deleteMany?: Enumerable<postsScalarWhereInput>
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<productsCreateWithoutCategoriesInput>, Enumerable<productsUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutCategoriesInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutCategoriesInput>
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutCategoriesInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutCategoriesInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type accountsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<accountsCreateWithoutOrdersInput, accountsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: accountsCreateOrConnectWithoutOrdersInput
    connect?: accountsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type accountsUpdateOneRequiredWithoutOrdersInput = {
    create?: XOR<accountsCreateWithoutOrdersInput, accountsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: accountsCreateOrConnectWithoutOrdersInput
    upsert?: accountsUpsertWithoutOrdersInput
    connect?: accountsWhereUniqueInput
    update?: XOR<accountsUpdateWithoutOrdersInput, accountsUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateOneRequiredWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type accountsCreateNestedOneWithoutPostsInput = {
    create?: XOR<accountsCreateWithoutPostsInput, accountsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutPostsInput
    connect?: accountsWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutPostsInput = {
    create?: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPostsInput
    connect?: categoriesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type accountsUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<accountsCreateWithoutPostsInput, accountsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutPostsInput
    upsert?: accountsUpsertWithoutPostsInput
    connect?: accountsWhereUniqueInput
    update?: XOR<accountsUpdateWithoutPostsInput, accountsUncheckedUpdateWithoutPostsInput>
  }

  export type categoriesUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPostsInput
    upsert?: categoriesUpsertWithoutPostsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<categoriesUpdateWithoutPostsInput, categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type accountsCreateNestedOneWithoutProductsInput = {
    create?: XOR<accountsCreateWithoutProductsInput, accountsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutProductsInput
    connect?: accountsWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProductsInput = {
    create?: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProductsInput
    connect?: usersWhereUniqueInput
  }

  export type accountsUpdateOneRequiredWithoutProductsInput = {
    create?: XOR<accountsCreateWithoutProductsInput, accountsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutProductsInput
    upsert?: accountsUpsertWithoutProductsInput
    connect?: accountsWhereUniqueInput
    update?: XOR<accountsUpdateWithoutProductsInput, accountsUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateOneRequiredWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type usersUpdateOneRequiredWithoutProductsInput = {
    create?: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProductsInput
    upsert?: usersUpsertWithoutProductsInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutProductsInput, usersUncheckedUpdateWithoutProductsInput>
  }

  export type accountsCreateNestedOneWithoutUsersInput = {
    create?: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: accountsCreateOrConnectWithoutUsersInput
    connect?: accountsWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type postsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<postsCreateWithoutUsersInput>, Enumerable<postsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutUsersInput>
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
  }

  export type productsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<productsCreateWithoutUsersInput>, Enumerable<productsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutUsersInput>
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type postsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<postsCreateWithoutUsersInput>, Enumerable<postsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutUsersInput>
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
  }

  export type productsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<productsCreateWithoutUsersInput>, Enumerable<productsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutUsersInput>
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type accountsUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: accountsCreateOrConnectWithoutUsersInput
    upsert?: accountsUpsertWithoutUsersInput
    connect?: accountsWhereUniqueInput
    update?: XOR<accountsUpdateWithoutUsersInput, accountsUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type postsUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<postsCreateWithoutUsersInput>, Enumerable<postsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<postsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
    set?: Enumerable<postsWhereUniqueInput>
    disconnect?: Enumerable<postsWhereUniqueInput>
    delete?: Enumerable<postsWhereUniqueInput>
    update?: Enumerable<postsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<postsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<postsScalarWhereInput>
  }

  export type productsUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<productsCreateWithoutUsersInput>, Enumerable<productsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type postsUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<postsCreateWithoutUsersInput>, Enumerable<postsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<postsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<postsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: Enumerable<postsWhereUniqueInput>
    set?: Enumerable<postsWhereUniqueInput>
    disconnect?: Enumerable<postsWhereUniqueInput>
    delete?: Enumerable<postsWhereUniqueInput>
    update?: Enumerable<postsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<postsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<postsScalarWhereInput>
  }

  export type productsUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<productsCreateWithoutUsersInput>, Enumerable<productsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type ordersCreateWithoutAccountsInput = {
    order_details: string
    status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutAccountsInput = {
    id?: number
    user_id: number
    order_details: string
    status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ordersCreateOrConnectWithoutAccountsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutAccountsInput, ordersUncheckedCreateWithoutAccountsInput>
  }

  export type ordersCreateManyAccountsInputEnvelope = {
    data: Enumerable<ordersCreateManyAccountsInput>
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutAccountsInput = {
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    categories: categoriesCreateNestedOneWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutAccountsInput = {
    id?: number
    user_id: number
    category_id: number
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type postsCreateOrConnectWithoutAccountsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutAccountsInput, postsUncheckedCreateWithoutAccountsInput>
  }

  export type postsCreateManyAccountsInputEnvelope = {
    data: Enumerable<postsCreateManyAccountsInput>
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutAccountsInput = {
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    categories: categoriesCreateNestedOneWithoutProductsInput
    users: usersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutAccountsInput = {
    id?: number
    user_id: number
    category_id: number
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsCreateOrConnectWithoutAccountsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutAccountsInput, productsUncheckedCreateWithoutAccountsInput>
  }

  export type productsCreateManyAccountsInputEnvelope = {
    data: Enumerable<productsCreateManyAccountsInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutAccountsInput = {
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAccountsInput = {
    id?: number
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAccountsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
  }

  export type usersCreateManyAccountsInputEnvelope = {
    data: Enumerable<usersCreateManyAccountsInput>
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutAccountsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutAccountsInput, ordersUncheckedUpdateWithoutAccountsInput>
    create: XOR<ordersCreateWithoutAccountsInput, ordersUncheckedCreateWithoutAccountsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutAccountsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutAccountsInput, ordersUncheckedUpdateWithoutAccountsInput>
  }

  export type ordersUpdateManyWithWhereWithoutAccountsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: Enumerable<ordersScalarWhereInput>
    OR?: Enumerable<ordersScalarWhereInput>
    NOT?: Enumerable<ordersScalarWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    account_id?: IntFilter | number
    order_details?: StringFilter | string
    status?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type postsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutAccountsInput, postsUncheckedUpdateWithoutAccountsInput>
    create: XOR<postsCreateWithoutAccountsInput, postsUncheckedCreateWithoutAccountsInput>
  }

  export type postsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutAccountsInput, postsUncheckedUpdateWithoutAccountsInput>
  }

  export type postsUpdateManyWithWhereWithoutAccountsInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutPostsInput>
  }

  export type postsScalarWhereInput = {
    AND?: Enumerable<postsScalarWhereInput>
    OR?: Enumerable<postsScalarWhereInput>
    NOT?: Enumerable<postsScalarWhereInput>
    id?: IntFilter | number
    account_id?: IntFilter | number
    user_id?: IntFilter | number
    category_id?: IntFilter | number
    title?: StringFilter | string
    slug?: StringFilter | string
    excerpt?: StringFilter | string
    description?: StringNullableFilter | string | null
    tags?: StringNullableFilter | string | null
    metadata?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type productsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutAccountsInput, productsUncheckedUpdateWithoutAccountsInput>
    create: XOR<productsCreateWithoutAccountsInput, productsUncheckedCreateWithoutAccountsInput>
  }

  export type productsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutAccountsInput, productsUncheckedUpdateWithoutAccountsInput>
  }

  export type productsUpdateManyWithWhereWithoutAccountsInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type productsScalarWhereInput = {
    AND?: Enumerable<productsScalarWhereInput>
    OR?: Enumerable<productsScalarWhereInput>
    NOT?: Enumerable<productsScalarWhereInput>
    id?: IntFilter | number
    account_id?: IntFilter | number
    user_id?: IntFilter | number
    category_id?: IntFilter | number
    product?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type usersUpsertWithWhereUniqueWithoutAccountsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutAccountsInput, usersUncheckedUpdateWithoutAccountsInput>
    create: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutAccountsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutAccountsInput, usersUncheckedUpdateWithoutAccountsInput>
  }

  export type usersUpdateManyWithWhereWithoutAccountsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    id?: IntFilter | number
    account_id?: IntFilter | number
    email?: StringFilter | string
    phone?: StringNullableFilter | string | null
    name?: StringFilter | string
    email_verified_at?: DateTimeNullableFilter | Date | string | null
    password?: StringNullableFilter | string | null
    provider?: StringNullableFilter | string | null
    provider_id?: StringNullableFilter | string | null
    owner?: BoolFilter | boolean
    metadata?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type postsCreateWithoutCategoriesInput = {
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    account_id: number
    user_id: number
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type postsCreateOrConnectWithoutCategoriesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput>
  }

  export type postsCreateManyCategoriesInputEnvelope = {
    data: Enumerable<postsCreateManyCategoriesInput>
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutCategoriesInput = {
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutProductsInput
    users: usersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    account_id: number
    user_id: number
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: Enumerable<productsCreateManyCategoriesInput>
    skipDuplicates?: boolean
  }

  export type postsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutCategoriesInput, postsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput>
  }

  export type postsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutCategoriesInput, postsUncheckedUpdateWithoutCategoriesInput>
  }

  export type postsUpdateManyWithWhereWithoutCategoriesInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutPostsInput>
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type accountsCreateWithoutOrdersInput = {
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    posts?: postsCreateNestedManyWithoutAccountsInput
    products?: productsCreateNestedManyWithoutAccountsInput
    users?: usersCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutOrdersInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    posts?: postsUncheckedCreateNestedManyWithoutAccountsInput
    products?: productsUncheckedCreateNestedManyWithoutAccountsInput
    users?: usersUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsCreateOrConnectWithoutOrdersInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutOrdersInput, accountsUncheckedCreateWithoutOrdersInput>
  }

  export type usersCreateWithoutOrdersInput = {
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    account_id: number
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type accountsUpsertWithoutOrdersInput = {
    update: XOR<accountsUpdateWithoutOrdersInput, accountsUncheckedUpdateWithoutOrdersInput>
    create: XOR<accountsCreateWithoutOrdersInput, accountsUncheckedCreateWithoutOrdersInput>
  }

  export type accountsUpdateWithoutOrdersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateManyWithoutAccountsInput
    products?: productsUpdateManyWithoutAccountsInput
    users?: usersUpdateManyWithoutAccountsInput
  }

  export type accountsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUncheckedUpdateManyWithoutAccountsInput
    products?: productsUncheckedUpdateManyWithoutAccountsInput
    users?: usersUncheckedUpdateManyWithoutAccountsInput
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutUsersInput
    posts?: postsUpdateManyWithoutUsersInput
    products?: productsUpdateManyWithoutUsersInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUncheckedUpdateManyWithoutUsersInput
    products?: productsUncheckedUpdateManyWithoutUsersInput
  }

  export type accountsCreateWithoutPostsInput = {
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutAccountsInput
    products?: productsCreateNestedManyWithoutAccountsInput
    users?: usersCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutPostsInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutAccountsInput
    products?: productsUncheckedCreateNestedManyWithoutAccountsInput
    users?: usersUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsCreateOrConnectWithoutPostsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutPostsInput, accountsUncheckedCreateWithoutPostsInput>
  }

  export type categoriesCreateWithoutPostsInput = {
    name?: string | null
    slug?: string | null
    description?: string | null
    specifications?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutPostsInput = {
    id?: number
    name?: string | null
    slug?: string | null
    description?: string | null
    specifications?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutPostsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
  }

  export type usersCreateWithoutPostsInput = {
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    id?: number
    account_id: number
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type accountsUpsertWithoutPostsInput = {
    update: XOR<accountsUpdateWithoutPostsInput, accountsUncheckedUpdateWithoutPostsInput>
    create: XOR<accountsCreateWithoutPostsInput, accountsUncheckedCreateWithoutPostsInput>
  }

  export type accountsUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutAccountsInput
    products?: productsUpdateManyWithoutAccountsInput
    users?: usersUpdateManyWithoutAccountsInput
  }

  export type accountsUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutAccountsInput
    products?: productsUncheckedUpdateManyWithoutAccountsInput
    users?: usersUncheckedUpdateManyWithoutAccountsInput
  }

  export type categoriesUpsertWithoutPostsInput = {
    update: XOR<categoriesUpdateWithoutPostsInput, categoriesUncheckedUpdateWithoutPostsInput>
    create: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
  }

  export type categoriesUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutCategoriesInput
  }

  export type categoriesUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCategoriesInput
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutUsersInput
    orders?: ordersUpdateManyWithoutUsersInput
    products?: productsUpdateManyWithoutUsersInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutUsersInput
    products?: productsUncheckedUpdateManyWithoutUsersInput
  }

  export type accountsCreateWithoutProductsInput = {
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutAccountsInput
    posts?: postsCreateNestedManyWithoutAccountsInput
    users?: usersCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutProductsInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutAccountsInput
    posts?: postsUncheckedCreateNestedManyWithoutAccountsInput
    users?: usersUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsCreateOrConnectWithoutProductsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutProductsInput, accountsUncheckedCreateWithoutProductsInput>
  }

  export type categoriesCreateWithoutProductsInput = {
    name?: string | null
    slug?: string | null
    description?: string | null
    specifications?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    posts?: postsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name?: string | null
    slug?: string | null
    description?: string | null
    specifications?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    posts?: postsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type usersCreateWithoutProductsInput = {
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProductsInput = {
    id?: number
    account_id: number
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProductsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
  }

  export type accountsUpsertWithoutProductsInput = {
    update: XOR<accountsUpdateWithoutProductsInput, accountsUncheckedUpdateWithoutProductsInput>
    create: XOR<accountsCreateWithoutProductsInput, accountsUncheckedCreateWithoutProductsInput>
  }

  export type accountsUpdateWithoutProductsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutAccountsInput
    posts?: postsUpdateManyWithoutAccountsInput
    users?: usersUpdateManyWithoutAccountsInput
  }

  export type accountsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutAccountsInput
    posts?: postsUncheckedUpdateManyWithoutAccountsInput
    users?: usersUncheckedUpdateManyWithoutAccountsInput
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateManyWithoutCategoriesInput
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUncheckedUpdateManyWithoutCategoriesInput
  }

  export type usersUpsertWithoutProductsInput = {
    update: XOR<usersUpdateWithoutProductsInput, usersUncheckedUpdateWithoutProductsInput>
    create: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
  }

  export type usersUpdateWithoutProductsInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutUsersInput
    orders?: ordersUpdateManyWithoutUsersInput
    posts?: postsUpdateManyWithoutUsersInput
  }

  export type usersUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutUsersInput
    posts?: postsUncheckedUpdateManyWithoutUsersInput
  }

  export type accountsCreateWithoutUsersInput = {
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutAccountsInput
    posts?: postsCreateNestedManyWithoutAccountsInput
    products?: productsCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutAccountsInput
    posts?: postsUncheckedCreateNestedManyWithoutAccountsInput
    products?: productsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsCreateOrConnectWithoutUsersInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateWithoutUsersInput = {
    order_details: string
    status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    account_id: number
    order_details: string
    status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: Enumerable<ordersCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutUsersInput = {
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutPostsInput
    categories: categoriesCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutUsersInput = {
    id?: number
    account_id: number
    category_id: number
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type postsCreateOrConnectWithoutUsersInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsCreateManyUsersInputEnvelope = {
    data: Enumerable<postsCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutUsersInput = {
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutUsersInput = {
    id?: number
    account_id: number
    category_id: number
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsCreateOrConnectWithoutUsersInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput>
  }

  export type productsCreateManyUsersInputEnvelope = {
    data: Enumerable<productsCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type accountsUpsertWithoutUsersInput = {
    update: XOR<accountsUpdateWithoutUsersInput, accountsUncheckedUpdateWithoutUsersInput>
    create: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput>
  }

  export type accountsUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutAccountsInput
    posts?: postsUpdateManyWithoutAccountsInput
    products?: productsUpdateManyWithoutAccountsInput
  }

  export type accountsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutAccountsInput
    posts?: postsUncheckedUpdateManyWithoutAccountsInput
    products?: productsUncheckedUpdateManyWithoutAccountsInput
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type postsUpsertWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsUpdateWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
  }

  export type postsUpdateManyWithWhereWithoutUsersInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutPostsInput>
  }

  export type productsUpsertWithWhereUniqueWithoutUsersInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutUsersInput, productsUncheckedUpdateWithoutUsersInput>
    create: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput>
  }

  export type productsUpdateWithWhereUniqueWithoutUsersInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutUsersInput, productsUncheckedUpdateWithoutUsersInput>
  }

  export type productsUpdateManyWithWhereWithoutUsersInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type ordersCreateManyAccountsInput = {
    id?: number
    user_id: number
    order_details: string
    status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type postsCreateManyAccountsInput = {
    id?: number
    user_id: number
    category_id: number
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsCreateManyAccountsInput = {
    id?: number
    user_id: number
    category_id: number
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type usersCreateManyAccountsInput = {
    id?: number
    email: string
    phone?: string | null
    name: string
    email_verified_at?: Date | string | null
    password?: string | null
    provider?: string | null
    provider_id?: string | null
    owner?: boolean
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ordersUpdateWithoutAccountsInput = {
    order_details?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutOrdersInput
  }

  export type ordersUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_details?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_details?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUpdateWithoutAccountsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneRequiredWithoutPostsInput
    users?: usersUpdateOneRequiredWithoutPostsInput
  }

  export type postsUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpdateWithoutAccountsInput = {
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneRequiredWithoutProductsInput
    users?: usersUpdateOneRequiredWithoutProductsInput
  }

  export type productsUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutUsersInput
    posts?: postsUpdateManyWithoutUsersInput
    products?: productsUpdateManyWithoutUsersInput
  }

  export type usersUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutUsersInput
    posts?: postsUncheckedUpdateManyWithoutUsersInput
    products?: productsUncheckedUpdateManyWithoutUsersInput
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsCreateManyCategoriesInput = {
    id?: number
    account_id: number
    user_id: number
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsCreateManyCategoriesInput = {
    id?: number
    account_id: number
    user_id: number
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type postsUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutPostsInput
    users?: usersUpdateOneRequiredWithoutPostsInput
  }

  export type postsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutProductsInput
    users?: usersUpdateOneRequiredWithoutProductsInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    account_id: number
    order_details: string
    status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type postsCreateManyUsersInput = {
    id?: number
    account_id: number
    category_id: number
    title: string
    slug: string
    excerpt: string
    description?: string | null
    tags?: string | null
    metadata?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsCreateManyUsersInput = {
    id?: number
    account_id: number
    category_id: number
    product: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    order_details?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutOrdersInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    order_details?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutPostsInput
    categories?: categoriesUpdateOneRequiredWithoutPostsInput
  }

  export type postsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpdateWithoutUsersInput = {
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutProductsInput
    categories?: categoriesUpdateOneRequiredWithoutProductsInput
  }

  export type productsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}