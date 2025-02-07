export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-06'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skjDvSGzPsyHw32Tqle6697aKYY8umBhT2OP9pWiZAqLMdMySxyTEwEtMC36oLOqUS8xswpgmDGLzHPUYelcdVnooIi5bnxpG8gfZxjhAXNLhTsEmJMuTRH95hmV3YF2z6drgKEgj53niuYwbC3sQRvmNXyusnxLqj4pp8K2stKKVmLJdxvE",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
