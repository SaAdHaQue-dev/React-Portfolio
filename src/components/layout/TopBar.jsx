export default function TopBar() {
  return (
    <div className="hidden bg-[#0d1b3d] px-4 py-3 text-[11px] font-medium text-slate-200 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span>M 49, Marris Rd, Gulzar Nagar, Hem Chand Compound, Aligarh, Uttar Pradesh 202001</span>
          <span>Admissions Open for Junior Classes</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#portal" className="hover:text-white">Parent Portal</a>
          <a href="#login" className="hover:text-white">Student Login</a>
        </div>
      </div>
    </div>
  )
}
