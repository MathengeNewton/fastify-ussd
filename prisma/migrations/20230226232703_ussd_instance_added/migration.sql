-- CreateTable
CREATE TABLE "ussd_steps" (
    "id" TEXT NOT NULL,
    "step" INTEGER NOT NULL,
    "response" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "ussd_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ussd_logs" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "service_code" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ussd_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ussd_steps_id_key" ON "ussd_steps"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ussd_steps_step_key" ON "ussd_steps"("step");

-- CreateIndex
CREATE UNIQUE INDEX "ussd_logs_id_key" ON "ussd_logs"("id");
