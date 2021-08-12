-- CreateTable
CREATE TABLE "survey_data" (
    "id" SERIAL NOT NULL,
    "respondent" TEXT,
    "question" TEXT,
    "answer" TEXT,
    "application" TEXT,
    "survey_name" TEXT,
    "load_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT,

    PRIMARY KEY ("id")
);
