import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60svh] flex-col items-center justify-center gap-6 py-20 text-center">
      <span className="fmt-eyebrow">Error 404</span>
      <h1 className="text-3xl sm:text-4xl">Esta página no existe</h1>
      <p className="max-w-md text-sm text-muted-foreground">
        Puede que el enlace esté roto o que la página se haya movido. Prueba desde el inicio o revisa nuestras
        soluciones.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Ir al inicio</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/soluciones">Ver soluciones</Link>
        </Button>
      </div>
    </Container>
  );
}
