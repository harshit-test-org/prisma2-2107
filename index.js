const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const test = await prisma.cart.create({
    data: {
      qty: 4,
      qtyAvl: 2,
    },
  });
  console.log(test);

  const data = await prisma.raw`
    SELECT COALESCE(SUM(Cart.qty - Cart.qtyAvl)) as total from Cart
  `;

  console.log(data);
}

main();
