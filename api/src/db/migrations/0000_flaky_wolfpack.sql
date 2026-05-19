CREATE TABLE "clients" (
	"id" text PRIMARY KEY NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"deletedAt" timestamp,
	"fullname" text NOT NULL,
	"cpf" text NOT NULL,
	"email" text NOT NULL,
	"favoriteColor" text,
	"observations" text,
	CONSTRAINT "clients_cpf_unique" UNIQUE("cpf")
);
