interface Props {
    children: React.ReactNode
    isRed?: boolean
}

export default function TaskFrame({ children, isRed }: Props) {
    return <div className={"border-4 " + (isRed ? "border-red-900" : "border-gray-900")}>
        {children}
    </div>
}