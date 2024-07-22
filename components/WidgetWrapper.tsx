export default function WidgetWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed bottom-5 right-3 sm:bottom-[3rem] sm:right-[3rem] flex flex-col items-center justify-between p-1 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full transition-all dark:bg-gray-950 dark:border-black/40 dark:text-white/60 dark:bg-opacity-75">
      {children}
    </div>
  )
}
