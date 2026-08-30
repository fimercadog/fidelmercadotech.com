import { test, expect } from "@playwright/test";

test("home: hero, CTAs and main sections render", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/hacer crecer tu empresa/i);
  await expect(page.getByRole("link", { name: "Conoce nuestras soluciones" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Productos listos para tu empresa" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /soluciones a la medida/i })).toBeVisible();

  expect(errors, `console errors:\n${errors.join("\n")}`).toEqual([]);
});

test("journey: home -> soluciones -> detail -> contacto form", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Conoce nuestras soluciones" }).click();
  await expect(page).toHaveURL(/\/soluciones$/);

  await page.getByRole("link", { name: "Ver solución" }).first().click();
  await expect(page).toHaveURL(/\/soluciones\/[a-z-]+$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // The detail page embeds the contact form.
  await expect(page.getByLabel("Nombre *")).toBeVisible();
  await expect(page.getByRole("button", { name: "Enviar mensaje" })).toBeVisible();
});

test("contacto: client-side validation blocks empty submit", async ({ page }) => {
  await page.goto("/contacto");
  await page.getByRole("button", { name: "Enviar mensaje" }).click();
  await expect(page.getByText("Escribe tu nombre")).toBeVisible();
  await expect(page.getByText(/Necesitamos tu autorización/i)).toBeVisible();
});

test("precios: 4 plans and FAQ accordion", async ({ page }) => {
  await page.goto("/precios");
  await expect(page.getByRole("heading", { name: "Web Express", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Web + Sistema", exact: true })).toBeVisible();

  const faq = page.getByRole("button", { name: /Los precios son fijos/i });
  await faq.click();
  await expect(page.getByText(/precios de referencia para arrancar/i)).toBeVisible();
});

test("nav + legal pages reachable", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("contentinfo").getByRole("link", { name: "Política de datos" })).toBeVisible();
  await page.goto("/privacidad");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/tratamiento de datos/i);
  await page.goto("/terminos");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Términos/i);
});

test("seo: robots and sitemap serve", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain("Sitemap:");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain("/soluciones/fidelos");
});
