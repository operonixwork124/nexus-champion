import React from 'react';

const Login = () => {
  return (
    <main className="main-wrapper relative overflow-hidden">
      <section id="login-section">
        <div className="py-40 pt-36 xl:pb-[200px] xl:pt-[180px]">
          <div className="global-container text-center">
            <h1 className="mb-[50px]">Welcome Back</h1>
            <img
              src="/task"
              alt="Login illustration"
              className="mx-auto max-w-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;