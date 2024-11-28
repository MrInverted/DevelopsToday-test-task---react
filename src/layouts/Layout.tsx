interface IProps {
  children: React.ReactNode;
}



function Layout({ children }: IProps) {
  return (
    <div className="w-full h-full py-10 px-5 max-w-screen-sm mx-auto">
      {children}
    </div>

  )
}

export default Layout