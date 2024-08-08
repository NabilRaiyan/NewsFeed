

const todoTitle = "Do Workout";
const todoDescription = "Do 2hr of workout";
const date = new Date().getDate()
const month = new Date().getMonth()
const year = new Date().getFullYear()


export default function Card(){
    return (
        <div className='w-60 border-rose-50 rounded m-4 p-4 bg-orange-100'>
            <h1 className="text-lg m-3">TODO</h1>
            <h1 className='m-3 text-3xl font-bold text-orange-400'>{todoTitle}</h1>
            <p className='m-3 text-lg text-orange-500'>{todoDescription}</p>
            <p className='m-3 text-lg text-orange-500'>{date}-{month}-{year}</p>
        </div>
    
    )
}