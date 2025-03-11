var posts=["2025/03/11/My-New-Post/","2025/03/11/hello-world/","2025/03/11/My-New-Post-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };