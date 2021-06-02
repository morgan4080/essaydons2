
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.24.0
 * Query Engine version: f3e341280d96d0abc068f97e959ddf01f321a858
 */
Prisma.prismaVersion = {
  client: "2.24.0",
  engine: "f3e341280d96d0abc068f97e959ddf01f321a858"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.CategoriesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  specifications: 'specifications',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.OrdersScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  account_id: 'account_id',
  order_details: 'order_details',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.PostsScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ProductsScalarFieldEnum = makeEnum({
  id: 'id',
  account_id: 'account_id',
  user_id: 'user_id',
  category_id: 'category_id',
  product: 'product',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
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
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  accounts: 'accounts',
  categories: 'categories',
  orders: 'orders',
  posts: 'posts',
  products: 'products',
  users: 'users'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
