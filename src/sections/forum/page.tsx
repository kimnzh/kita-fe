import { Search, MessageCircle, Bell, Home, Hash, FileText, Settings, Heart, MessageSquare, Eye, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForumPage() {
  const posts = [
    {
      id: 1,
      title: "Kenapa aku malu bertanya tentang Kespro",
      author: "Rara_Remaja Peduli",
      avatar: "/src/assets/avatar.png",
      image: "/src/assets/post1.png",
      tags: ["#remaja", "#kespro", "#stigma"],
      views: "964,258",
      likes: "64,755",
      comments: "44",
      timeAgo: "2 weeks ago"
    },
    {
      id: 2,
      title: "Tes IMS Mandiri: Pengalaman & Kapan Harus Cemas?",
      author: "Anonim_Sehat",
      avatar: "/src/assets/avatar.png",
      image: "/src/assets/post2.png",
      tags: ["#IMS", "#SKRINING", "#Kesehatan"],
      views: "964,258",
      likes: "64,755",
      comments: "44",
      timeAgo: "2 weeks ago"
    },
    {
      id: 3,
      title: "Butuh Dukungan Setelah Trauma Seksual, Ke Mana?",
      author: "Pejuang_Diri",
      avatar: "/src/assets/avatar.png",
      image: "/src/assets/post3.png",
      tags: ["#trauma", "#psikolog", "#dukungan"],
      views: "964,258",
      likes: "64,755",
      comments: "44",
      timeAgo: "2 weeks ago"
    }
  ];

  const popularTags = [
    { name: "#rajasinga", posts: "82,643", trending: true },
    { name: "#trauma", posts: "65,523", trending: true },
    { name: "#pmo", posts: "53,345", trending: true },
    { name: "#hivaids", posts: "48,029", trending: false },
    { name: "#mentalhealth", posts: "33,345", trending: true },
    { name: "#judging", posts: "26,643", trending: false }
  ];

  return (
    <div className="min-h-screen bg-[#00072D] text-foreground">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full">
              <img src="/logo.webp" alt="Logo" className="h-8 w-auto" />
            </span>
            <span className="text-white text-xl font-bold tracking-wide">KITA</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Type here to search..." 
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2 bg-slate-700 rounded-lg px-3 py-2">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full" style={{ background: "#F9DFC0" }}>
                <img 
                  src="/src/assets/avatar.png" 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full object-cover"
                />
              </span>
              <span className="text-white font-medium">AR. Jakir</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen p-4">
          <nav className="space-y-2">
            <Button variant="default" className="w-full justify-start bg-blue-600 hover:bg-blue-700 py-4 text-lg">
              <Home className="w-6 h-6 mr-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 py-4 text-lg">
              <Hash className="w-6 h-6 mr-4" />
              Topic
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 py-4 text-lg">
              <FileText className="w-6 h-6 mr-4" />
              Your Post
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 py-4 text-lg">
              <Settings className="w-6 h-6 mr-4" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Create Post Section */}
          <div className="bg-slate-800 rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full" style={{ background: "#F9DFC0" }}>
                <img 
                  src="/src/assets/avatar.png" 
                  alt="Your avatar" 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </span>
              <div className="flex-1">
                <Input 
                  placeholder="Let's share what going on your mind..." 
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
                Create Post
              </Button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-slate-800 rounded-lg p-6">
                <div className="flex space-x-4">
                  <img 
                    src={post.image} 
                    alt="Post image" 
                    className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                        <Heart className="w-5 h-5" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full" style={{ background: "#F9DFC0" }}>
                        <img 
                          src={post.avatar} 
                          alt={post.author} 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </span>
                      <div>
                        <div className="text-white font-medium">{post.author}</div>
                        <div className="text-slate-400 text-sm">{post.timeAgo}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views} Views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes} Likes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 p-6 space-y-6">
          {/* Newest and Recent */}
          <div className="bg-slate-800 rounded-lg p-4 space-y-6">
            {/* Newest and Recent */}
            <div className="flex items-start space-x-3 mb-3 p-2 rounded-lg transition-colors cursor-pointer hover:bg-slate-700">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16046 1.29732C9.55452 0.68838 10.4455 0.68838 10.8395 1.29732L11.7217 2.66053C11.9789 3.05794 12.4795 3.22058 12.9211 3.05024L14.4361 2.46591C15.1128 2.2049 15.8336 2.72859 15.7945 3.45285L15.7069 5.07425C15.6814 5.54692 15.9908 5.97274 16.4482 6.09452L18.0173 6.51227C18.7182 6.69888 18.9935 7.54622 18.5362 8.10917L17.5123 9.36944C17.2138 9.73683 17.2138 10.2632 17.5123 10.6306L18.5362 11.8908C18.9935 12.4538 18.7182 13.3011 18.0173 13.4877L16.4482 13.9055C15.9908 14.0273 15.6814 14.4531 15.7069 14.9257L15.7945 16.5471C15.8336 17.2714 15.1128 17.7951 14.4361 17.5341L12.9211 16.9498C12.4795 16.7794 11.9789 16.9421 11.7217 17.3395L10.8395 18.7027C10.4455 19.3116 9.55452 19.3116 9.16046 18.7027L8.27828 17.3395C8.0211 16.9421 7.52052 16.7794 7.07887 16.9498L5.56389 17.5341C4.88716 17.7951 4.16637 17.2714 4.20549 16.5471L4.29306 14.9257C4.31859 14.4531 4.00922 14.0273 3.55179 13.9055L1.98269 13.4877C1.28178 13.3011 1.00646 12.4538 1.46383 11.8908L2.48771 10.6306C2.78619 10.2632 2.78619 9.73683 2.48771 9.36944L1.46382 8.10917C1.00646 7.54622 1.28178 6.69888 1.98269 6.51227L3.55179 6.09452C4.00922 5.97274 4.31859 5.54692 4.29306 5.07425L4.20549 3.45285C4.16637 2.72859 4.88716 2.2049 5.56389 2.46591L7.07887 3.05024C7.52052 3.22058 8.0211 3.05794 8.27828 2.66053L9.16046 1.29732Z" fill="#0095FF"/>
                <path d="M4.462 12V8.088H5.368L6.388 10.032L6.772 10.896H6.796C6.78 10.688 6.758 10.456 6.73 10.2C6.702 9.944 6.688 9.7 6.688 9.468V8.088H7.528V12H6.622L5.602 10.05L5.218 9.198H5.194C5.214 9.414 5.236 9.646 5.26 9.894C5.288 10.142 5.302 10.382 5.302 10.614V12H4.462ZM9.71223 12.072C9.42823 12.072 9.17223 12.01 8.94423 11.886C8.71623 11.762 8.53623 11.584 8.40423 11.352C8.27223 11.12 8.20623 10.84 8.20623 10.512C8.20623 10.188 8.27223 9.91 8.40423 9.678C8.54023 9.446 8.71623 9.268 8.93223 9.144C9.14823 9.016 9.37423 8.952 9.61023 8.952C9.89423 8.952 10.1282 9.016 10.3122 9.144C10.5002 9.268 10.6402 9.438 10.7322 9.654C10.8282 9.866 10.8762 10.108 10.8762 10.38C10.8762 10.456 10.8722 10.532 10.8642 10.608C10.8562 10.68 10.8482 10.734 10.8402 10.77H9.05823C9.09823 10.986 9.18823 11.146 9.32823 11.25C9.46823 11.35 9.63623 11.4 9.83223 11.4C10.0442 11.4 10.2582 11.334 10.4742 11.202L10.7682 11.736C10.6162 11.84 10.4462 11.922 10.2582 11.982C10.0702 12.042 9.88823 12.072 9.71223 12.072ZM9.05223 10.188H10.1262C10.1262 10.024 10.0862 9.89 10.0062 9.786C9.93023 9.678 9.80423 9.624 9.62823 9.624C9.49223 9.624 9.37023 9.672 9.26223 9.768C9.15423 9.86 9.08423 10 9.05223 10.188ZM11.9485 12L11.2045 9.024H12.0805L12.3685 10.404C12.3925 10.552 12.4145 10.698 12.4345 10.842C12.4545 10.986 12.4765 11.134 12.5005 11.286H12.5245C12.5525 11.134 12.5785 10.984 12.6025 10.836C12.6305 10.688 12.6625 10.544 12.6985 10.404L13.0285 9.024H13.7905L14.1265 10.404C14.1625 10.552 14.1945 10.698 14.2225 10.842C14.2545 10.986 14.2845 11.134 14.3125 11.286H14.3365C14.3645 11.134 14.3865 10.986 14.4025 10.842C14.4225 10.698 14.4465 10.552 14.4745 10.404L14.7565 9.024H15.5725L14.8585 12H13.8265L13.5565 10.812C13.5285 10.672 13.5005 10.532 13.4725 10.392C13.4485 10.252 13.4225 10.102 13.3945 9.942H13.3705C13.3425 10.102 13.3165 10.252 13.2925 10.392C13.2725 10.532 13.2485 10.672 13.2205 10.812L12.9565 12H11.9485Z" fill="white"/>
              </svg>
              <div>
                <h3 className="text-white font-semibold">Newest and Recent</h3>
                <p className="text-slate-400 text-sm mt-1">Find the latest update.</p>
              </div>
            </div>
            {/* Popular of the day */}
            <div className="flex items-start space-x-3 mb-3 p-2 rounded-lg transition-colors cursor-pointer hover:bg-slate-700">
              <TrendingUp className="w-4 h-4 text-white mt-1" />
              <div>
                <h3 className="text-white font-semibold">Popular of the day</h3>
                <p className="text-slate-400 text-sm mt-1">Short, featured today by Curators.</p>
              </div>
            </div>
            {/* Following */}
            <div className="flex items-start space-x-3 mb-3 p-2 rounded-lg transition-colors cursor-pointer hover:bg-slate-700">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5C13 2.79066 11.2089 1 9 1C6.79109 1 5 2.79066 5 5C5 7.20934 6.79109 9 9 9C11.2089 9 13 7.20934 13 5Z" fill="#9900FF"/>
                <path d="M12 9C11.2357 9.5784 10.0266 10 9 10C7.95345 10 6.7718 9.59874 6 9C1.10197 10.179 0.910523 14.2341 1.0085 17.979C1.0247 18.5984 1.3724 19.0001 2 19.0001L11 19V16.0001C11 14.9814 11.307 14.0001 13 14.0001L16.5 14C16.5 11 14.5 9 12 9Z" fill="#9900FF"/>
                <path d="M13 17H19M19 17L17.5 15.5M19 17L17.5 18.5" stroke="#9900FF" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-white font-semibold">Following</h3>
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">34</span>
                </div>
                <p className="text-slate-400 text-sm mt-1">Explore from your favorite person</p>
              </div>
            </div>
          </div>
          {/* Popular Tags */}
          <div className="bg-slate-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">Popular Tags</h3>
            <div className="space-y-3">
              {popularTags.map((tag, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{tag.name}</div>
                    <div className="text-slate-400 text-sm">
                      {tag.posts} Posts{tag.trending ? " • Trending" : ""}
                    </div>
                  </div>
                  {tag.trending && (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}