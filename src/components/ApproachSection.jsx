const STEPS = ['Empathy', 'Research', 'Ideate', 'Design']

export default function ApproachSection() {
  return (
    <section className="bg-[#f2f2f2] px-4 py-20 sm:px-6">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-10">
        <h2 className="text-center text-3xl font-bold text-black/80">
          How I Approach Design
        </h2>
        <div
          className="w-full rounded-[16px] border-2 border-white bg-white/70 p-[14px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #ececec 0px, #ececec 1.1px, transparent 1.1px, transparent 5px)',
          }}
        >
          <div className="rounded-[12px] border-2 border-white bg-[#ecf4ef] p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {STEPS.map((step) => (
                <div
                  key={step}
                  className="flex h-[156px] items-center justify-center rounded-[10px] border border-white bg-white"
                >
                  <p className="text-2xl font-bold text-black/70">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
