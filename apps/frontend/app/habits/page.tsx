export default function HabitsPage() {
  return (
    <>
        <div className="relative h-screen w-screen">
            <div className="w-full max-w-[calc(100%-130px)] rounded-lg p-2
             bg-gray-700 absolute top-4 left-2 h-9 flex items-center">
            </div>

            <div className=" flex justify-center items-center 
            absolute top-15 left-2 right-2 bottom-2 rounded-lg bg-blue-700"
            style={{clipPath: "path("}}
            >
                Main Content
            </div>
        </div>
    </>
  );
}
