  <template>
    <v-app light>

      <!-- Floating Text Overlay -->
        <div v-if="showFloatingText" class="floating-text"   :style="{ left: floatingX + 'px', top: floatingY + 'px' }">
          <span>{{ hoveredMember.name ? hoveredMember.name  : hoveredMember }}</span>
        </div>

        <v-toolbar v-if="isAtBottom !== true" class="tBar" color="#212021">
          <v-toolbar-title @click="handleMenuItemClick({link:'#home'})">COACH KIP
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon color="#FFD700" class="hidden-md-and-up" size="x-large" @click.stop="drawer = !drawer" />
          <v-toolbar-items class="hidden-sm-and-down">
          <template v-for="(item, index) in menuItems" :key="index">
            <v-btn 
              flat 
              :class="{ 'active-line': activeSection === item.link.substring(1) }" 
              :color="activeSection === item.link.substring(1) ? '#FFD700' : '#FFFFFF'" 
              class="menu-button" 
              @click="handleMenuItemClick(item)">
              {{ item.text }}
            </v-btn>
          </template>
        </v-toolbar-items>
      </v-toolbar>

      <!-- Mobile Navigation Drawer -->
      <v-navigation-drawer style="z-index:10000" location="right" cl v-model="drawer" fixed temporary class="mobile-nav fullscreen-drawer">
        <v-list nav dense>
          <v-list-item-group>
            <template v-for="(item, index) in menuItems" :key="index">
              <v-list-item @click="handleMenuItemClick(item)">
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

  <!-- 1ST Section -->
      <section style="position: relative; z-index: 2;"  id="home" :height="isMobile ? '100vh' : '100vh'" class="overflow-hidden">
        <v-parallax color="black" :height="isMobile ? '100vh' : '100vh'">
          <div class="hero-content">
            <div class="title-wrapper">
              <div class="main-title">
                  <span class="word" :style="{ '--i': 0 }">COACH</span>
                  <span class="word" :style="{ '--i': 3 }"> &nbsp </span>
                  <span class="word" :style="{ '--i': 6 }">KIP</span>
                </div>
            </div>
          </div>
        </v-parallax>
      </section>
  <!-- HOW WE DO -->
      <section style="position: relative; z-index: 2;" :height="isMobile ? '170vh' : '100vh'" id="how-we-do" @mousemove="handleMouseMove($event, 'How we do')"  @mouseleave="handleMouseLeave">
        <v-parallax color="black" :height="isMobile ? '170vh' : '100vh'">
          <v-container fluid  style="padding:10% !important;">
            <div class="section-header mb-8">
              <h2 class="text-h3 text-white mb-4">What we do</h2>
              <div class="main-title1">
                <br>
                <p class="typing-text" style="text-align: left;">
                  We are your dream swiss-army-knife co-founder.
                  We design and build a fantastic product, solve the toughest data science problems,
                  and navigate the way to finding strong customer pull through rigorous validation and digital marketing. 
                  We bring experience raising billions of dollars of capital. Oh, and we'll manage the books, legal, 
                  and HR. We invest everything we have in your success.
                </p>
              </div>
            </div>
          </v-container>
        </v-parallax>
      </section>
  <!-- //2ND SECTON -->
      <section :height="isMobile ? '200vh' : '100vh'" style="position: relative; z-index: 2;">
          <v-parallax color="black" :height="isMobile ? '200vh' : '100vh'">
            <v-container fluid class="services-container" style="padding:2% !important">
              <div class="services-grid">
                <div class="service-item">Market Research</div>
                <div class="service-item">Concept Validation</div>
                <div class="service-item">Engineering</div>
                <div class="service-item">Data Science</div>
                <div class="service-item">Go-To-Market</div>
                <div class="service-item">Visual & UX Design</div>
                <div class="service-item">Product Management</div>
                <div class="service-item">Recruiting</div>  
                <div class="service-item">Fundraising</div>
                <div class="service-item">Marketing</div>
                <div class="service-item">Company Formation</div>
                <div class="service-item">Finance</div>
                <div class="service-item">Operations</div>
                <div class="service-item">Legal & HR</div>
              </div>
            </v-container>
          </v-parallax>
      </section>
  <!-- //HOW WE DO IT SECTION -->
      <section style="position: relative; z-index: 2;" :height="isMobile ? '170vh' : '100vh'" id="how-we-do-it"  @mousemove="handleMouseMove($event, 'How we do it')"  @mouseleave="handleMouseLeave">
        <v-parallax :height="isMobile ? '170vh' : '100vh'" color="black">
          <v-container fluid  style="padding:10% !important;">
            <div class="section-header mb-8">
              <h2 class="text-h3 text-white mb-4">How we do it</h2>
              <div class="main-title1">
                <br>
                <p class="typing-text" style="text-align: left;">
                  Building a great startup is hard. Really hard. It requires domain expertise, 
                  uncommon talent, great execution, great timing, and a little luck. 
                  It also requires the ever-elusive great idea. Our team has developed the playbook on how to rapidly validate,
                  refine, and build new businesses.
                </p>
              </div>
            </div>
          </v-container>
        </v-parallax>
    </section>
  <!-- //IDEA SECTION -->
      <section :height="isMobile ? '200vh' : '100vh'" style="position: relative; z-index: 2;">
        <v-parallax :height="isMobile ? '200vh' : '100vh'" color="black">
          <v-container fluid style="padding: 5% !important">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div  @mousemove="handleMouseMove($event, '01—Ideation')"  @mouseleave="handleMouseLeave" ref="lottieContainer" style="width: 500px; height: 500px;"></div>
              </v-col>
              </v-col>
              <v-col cols="12" md="6">
                <div class="ideation-text">
                  <h1 class="section-title color-slate" color="#e4dbcc" style="font-family: Aeonik, Arial, sans-serif;">01—Ideation</h1>
                  <br><br>
                  <p style="font-size:48px !important;font-weight: 400">It could be our idea. It could be your idea. </p>
                  <br><br>
                  <p class="section-description">
                    Either way, we put it through the ringer: determining if it can be a world-changing, 
                    venture-scale company that customers love.Sign up to join our bi-weekly ideation sessions.
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
  <!-- //VALIDATION SECTION -->
      <section :height="isMobile ? '225vh' : '100vh'" style="position: relative; z-index: 2;">
        <v-parallax :height="isMobile ? '225vh' : '100vh'" color="black">
          <v-container fluid style="padding: 5% !important">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div  @mousemove="handleMouseMove($event, '02—Validation')"  @mouseleave="handleMouseLeave" ref="lottieContainer1" style="width: 800px; height: 600px;"></div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="ideation-text">
                  <h1 class="section-title color-slate" color="#e4dbcc">02—Validation</h1>
                  <br><br>
                  <p style="font-size:48px !important;font-weight: 400">Every idea we work on sounds good at first. But nine out of ten aren't.</p>
                  <br><br>
                  <p class="section-description">
                    We know this because we track it. We put an idea through its paces, testing customer demand, technical feasibility, 
                    business model, unit economics, market dynamics, investor interest, and more. We benchmark every idea against the 
                    performance of our past ideas to determine if it's worth our time—and yours.
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
  <!-- //03 CREATION -->
      <section :height="isMobile ? '200vh' : '100vh'" style="position: relative; z-index: 2;">
        <v-parallax :height="isMobile ? '200vh' : '100vh'" color="black">
          <v-container fluid style="padding: 5% !important">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div  @mousemove="handleMouseMove($event, '03—Creation')"  @mouseleave="handleMouseLeave" ref="lottieContainer2" style="width: 500px; height: 500px;"></div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="ideation-text">
                  <h1 class="section-title color-slate" color="#e4dbcc" style="    font-family: Aeonik, Arial, sans-serif;">03—Creation</h1>
                  <br><br>
                  <p style="font-size:48px !important;font-weight: 400">When an idea is a good one, it’s time to move. Fast.</p>
                  <br><br>
                  <p class="section-description">
                    Our team of designers, engineers, data scientists, marketers, and company builders turn a validated concept into a real product in market.
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
  <!-- //04 SPINOUT -->
      <section :height="isMobile ? '200vh' : '100vh'" style="position: relative; z-index: 2;">
        <v-parallax :height="isMobile ? '200vh' : '100vh'" color="black">
          <v-container fluid style="padding: 5% !important">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div  @mousemove="handleMouseMove($event, '04—Spinout')"  @mouseleave="handleMouseLeave" ref="lottieContainer3" style="width: 500px; height: 400px;"></div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="ideation-text">
                  <h1 class="section-title color-slate" color="#e4dbcc" style="    font-family: Aeonik, Arial, sans-serif;">04—Spinout</h1>
                  <br><br>
                  <p style="font-size:48px !important;font-weight: 400">Great companies require extraordinary people and smart capital.</p>
                  <br><br>
                  <p class="section-description">
                    Our spinout process is the best method we know of to get a company off the ground, staffed up, 
                    and funded by great venture investors as fast as humanly possible.
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
  <!-- //05 SCALE UP -->
      <section :height="isMobile ? '225vh' : '100vh'" style="position: relative; z-index: 2;">
        <v-parallax :height="isMobile ? '225vh' : '100vh'" color="black">
          <v-container fluid style="padding: 5% !important">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div  @mousemove="handleMouseMove($event, '05—Scale Up')"  @mouseleave="handleMouseLeave" ref="lottieContainer4" style="width: 700px; height: 700px;"></div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="ideation-text">
                  <h1 class="section-title color-slate" color="#e4dbcc" style="    font-family: Aeonik, Arial, sans-serif;">05—Scale Up</h1>
                  <br><br>
                  <p style="font-size:48px !important;font-weight: 400">We’ll take care of the boring stuff.</p>
                  <br><br>
                  <p class="section-description">
                  Focus is the lifeblood of an early-stage company. Our recruiting, legal, 
                  and finance teams, along with our relationships with top service providers,
                  allow founders to keep their eyes squarely on building the business.
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

   <!-- //RESULTS SECTION -->
    <section id="results" :height="isMobile ? '205vh' : '150vh'" style="position: relative; z-index: 2;">
      <v-parallax :height="isMobile ? '205vh' : '150vh'" color="black">
        <v-container fluid  style="padding:10% !important;">
            <div class="section-header mb-8">
              <h2 class="text-h3 text-white mb-4">Results</h2>
                <v-row  justify="center"  style="padding: 5% !important;">
                    <v-col cols="12" md="6">
                      <h1 class="text-h1 text-yellow large-number mb-8"  v-text="countIdeasSpunOut"></h1>
                      <hr>
                        <br>
                        <h3 class="text-h2 text-white" >Ideas Spun Out</h3>
                        <br/>
                        <p class="text-white" style="font-size:20px !important">
                          In the rarest of cases, a startup idea has great timing, true customer demand, and the market is enormous.
                        </p> 
                    </v-col>
                    <v-col cols="12" md="6">
                      <h1 class="text-h1 text-yellow large-number mb-8"  v-text="countIdeasKilled"></h1>
                      <hr>
                      <br>
                      <h3 class="text-h2 text-white">Ideas Killed</h3>
                      <br/>
                      <p class="text-white" style="font-size:22px !important">
                        More often than not, an idea isn't a viable business. Our learnings from our failures make us more confident in the ideas that we love.
                      </p> 
                    </v-col>
                </v-row>
            </div>
        </v-container>
      </v-parallax>
    </section>

  <!-- //TEAM SECTION -->
    <section id="team" :height="isMobile ? '490vh' : '150vh'"  style="position: relative; z-index: 2;">
        <v-card :height="isMobile ? '490vh' : '150vh'" color="black" style="position: relative; border-radius: 0% !important">
          <v-container fluid  style="padding:10% !important;">
                <div class="section-header mb-8">
                    <h2 class="text-h3 text-white mb-3 mt-2">Team</h2>
                </div>
                <div class="team-members-container" 
                    ref="teamMembersContainer"
                    @mousedown="startDrag"
                    @mouseup="stopDrag"
                    @mouseleave="stopDrag"
                    @mousemove="drag">
                    <div :class="isMobile == false ? 'team-members-row':''">
                        <v-col v-for="member in teamMembers" 
                              :key="member.id" 
                              :cols="isMobile ? 12 : 2"
                              class="d-flex flex-column align-center">
                            <v-img :src="member.image"
                                  class="team-image"
                                  :height="isMobile ? 470 : 570"
                                  :width="isMobile ? 400 : 450"
                                  @mousemove="handleMouseMove($event, member.name)"
                                  @mouseleave="handleMouseLeave"/>
                            <h3 class="text-white">{{ member.name }}</h3>
                            <p class="text-white">{{ member.position }}</p>
                        </v-col>
                    </div>
                </div>
            </v-container>
        </v-card>
    </section>
  <!-- //CONTACT SECTION -->

  <!-- //Desktop -->
  <v-footer color="#b7e3b6" v-if="isMobile !== true" style="height: 100vh; position: fixed; bottom: 0; left: 0; right: 0;" id="contact"
  :style="{'z-index':isAtBottom == true ? 9999 : 1}">
    <div class="section-header mb-8">
        <h2 v-if="isMobile != true" class="text-h3 text-black mb-3 ">Contact</h2>
        <h4 v-else class="text-h4 text-black mb-3 mt-2">Contact</h4>
    </div>
    <v-row>
        <v-col cols="3">
            <!-- Currently Working In Section -->
        </v-col>
        <v-col cols="9">
              <v-row class="mt-n16">
                  <v-col>
                      <p class="text-black"><strong><h2>Address</h2></strong></p>
                  </v-col>
                  <v-col>
                      <p class="text-black">Parker Studio</p>
                      <p class="text-black">5424 Ballard Ave NW</p>
                      <p class="text-black">Unit 103</p>
                      <p class="text-black">Seattle, WA 98107</p>
                      <p class="text-black">United States</p>
                  </v-col>
                    <v-col>
                      <p class="text-black">Parker Studio</p>
                      <p class="text-black">5424 Ballard Ave NW</p>
                      <p class="text-black">Unit 103</p>
                      <p class="text-black">Seattle, WA 98107</p>
                      <p class="text-black">United States</p>
                  </v-col>
              </v-row>
            <v-row class="mt-n5">
                <v-col>
                    <hr>
                </v-col>
            </v-row>
            <v-row class="my-custom-row mt-n5">
                <v-col>
                    <p class="text-black"><strong><h2>Inquiries</h2></strong></p>
                </v-col>
                <v-col>
                    <p class="text-black">+1 206 395 9662</p>
                </v-col>
                <v-col>
                    <p class="text-black">hello(at)parker.studio</p>
                </v-col>
            </v-row>
            <v-row class="mt-n5">
                <v-col>
                    <hr>
                </v-col>
            </v-row>
            <v-row class="my-custom-row">
                <v-col>
                    <p class="text-black"><strong><h2>Careers Internships</h2></strong></p>
                </v-col>
                <v-col>
                    <p class="text-black">work(at)parker.studio</p>
                </v-col>
                <v-col>
                    <p class="text-black">intern(at)parker.studio</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <hr>
                </v-col>
            </v-row>
            <v-row class="my-custom-row">
                <v-col>
                    <p class="text-black"><strong><h2>Follow us</h2></strong></p>
                </v-col>
                <v-col>
                    <p class="text-black">Instagram</p>
                </v-col>
                <v-col>
                    <p class="text-black">Tumblr</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <hr>
                </v-col>
            </v-row>
            <v-row class="my-custom-row">
                <v-col>
                    <p class="text-black"><strong><h2>Newsletter</h2></strong></p>
                </v-col>
                <v-col>
                    <v-text-field variant="underlined" placeholder="Email" />
                </v-col>
                <v-col>
                  <v-btn color="black" class="text-white">SUBMIT</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <v-row :class="isMobile == true ? 'mt-n6': 'mb-16'">
        <v-col cols="2">
            <!-- Currently Working In Section -->
            <v-toolbar class="mt-n6 marquee-container" style="background-color: #b7e3b6; z-index: 9">
                <v-toolbar-title >
                  <h3 v-if="isMobile !== true">Currently working in: </h3>
                  <h5 v-else>Working in:  </h5>
                </v-toolbar-title>
            </v-toolbar>
        </v-col>
        <v-col cols="9">
            <div class="marquee-container">
                <div class="contact__marquee__ticker__inner">
                    <h3 style="display: inline-block;" v-if="isMobile !== true">
                        SEATTLE <span> (21:07:21),</span> SFO <span> (02:07:21),</span> CHICAGO <span> (23:07:21),</span> AUSTIN <span> (23:07:21),</span> NYC <span> (00:07:21),</span> LONDON <span> (00:07:21),</span>
                    </h3>
                    <h5 style="display: inline-block;" v-else>
                        SEATTLE, SFO, CHICAGO, AUSTIN, NYC, LONDON
                    </h5>
                </div>
            </div>
        </v-col>
    </v-row>
  </v-footer>
  <!-- //Mobile -->
  <v-footer color="#b7e3b6" v-if="isMobile" 
  style="max-height: 100vh; height: 100vh; position: fixed; bottom: 0; left: 0; right: 0; overflow-y: auto;" 
  id="contact"
  :style="{'z-index': isAtBottom ? 9999 : 1}">
  <h4 class="text-h4 text-black mb-3 mt-2 text-center">Contact</h4>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4 class="text-black font-weight-bold">Address</h4>
        <p class="text-black">Parker Studio</p>
        <p class="text-black">5424 Ballard Ave NW</p>
        <p class="text-black">Unit 103</p>
        <p class="text-black">Seattle, WA 98107</p>
        <p class="text-black">United States</p>
        <v-divider class="my-4"></v-divider>
      </v-col>

      <v-col cols="12">
        <h4 class="text-black font-weight-bold">Inquiries</h4>
        <p class="text-black">+1 206 395 9662</p>
        <p class="text-black">hello(at)parker.studio</p>
        <v-divider class="my-4"></v-divider>
      </v-col>

      <v-col cols="12">
        <h4 class="text-black font-weight-bold">Careers & Internships</h4>
        <p class="text-black">work(at)parker.studio</p>
        <p class="text-black">intern(at)parker.studio</p>
        <v-divider class="my-4"></v-divider>
      </v-col>

      <v-col cols="12">
        <h4 class="text-black font-weight-bold">Follow Us</h4>
        <p class="text-black">Instagram</p>
        <p class="text-black">Tumblr</p>
        <v-divider class="my-4"></v-divider>
      </v-col>

      <v-col cols="12">
        <h4 class="text-black font-weight-bold">Newsletter</h4>
        <v-text-field variant="underlined" placeholder="Email" class="mb-2" />
        <v-btn color="black" class="text-white">SUBMIT</v-btn>
        <v-divider class="my-4"></v-divider>
      </v-col>
    </v-row>
  </v-container>

  <!-- Marquee Section -->
  <v-row style="position: relative; bottom: 0; left: 0; right: 0;">
    <v-col>
      <v-toolbar style="background-color: #b7e3b6; z-index: 9">
        <v-toolbar-title>
          <h5 class="text-black font-weight-bold">Currently Working In:</h5>
        </v-toolbar-title>
      </v-toolbar>
      <div class="marquee-container">
        <div class="contact__marquee__ticker__inner text-center">
          <h5 style="display: inline-block;">
            SEATTLE, SFO, CHICAGO, AUSTIN, NYC, LONDON
          </h5>
        </div>
      </div>
    </v-col>
  </v-row>

</v-footer>

  </v-app>
</template>

  <script>
  import lottie from 'lottie-web'
  export default {
    data() {
      return {
        drawer: false,
        menuItems: [
          { text: 'HOME', link: '#home' },
          { text: 'WHAT WE DO', link: '#how-we-do' },
          { text: 'HOW WE DO IT', link: '#how-we-do-it' },
          { text: 'WHERE WE\'VE BEEN', link: '#results' },
          { text: 'WHO ARE WE', link: '#team' },  // Changed from '#who-are-we' to '#team'
          { text: 'WHEN TO CONTACT', link: '#contact' } 
        ],
        hoveredMember: null,
        isMobile: false,
        hoveredCard: null,
        cursorX: 0,
        cursorY: 0,
        showFloatingText: false,
        valid: true,
        name: '',
        email: '',
        message: '',
        emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'Email must be valid'
        ],
        messageRules: [
          v => !!v || 'Message is required',
          v => (v && v.length >= 10) || 'Message must be at least 10 characters'
        ],
        teamMembers: [
        { 
          id: 1, 
          name: 'Anthony Pablo', 
          position: 'CEO', 
          image: 'https://img.freepik.com/premium-photo/3d-cartoon-business-character_776674-532471.jpg',
          details: 'Anthony has over 20 years of experience in the tech industry and has led multiple successful startups.'
        },
        { 
          id: 2, 
          name: 'Jane Smith', 
          position: 'CTO', 
          image: 'https://img.freepik.com/premium-photo/3d-animation-style-portrait-business-woman-3d-metaverse-avatar-cartoon-character-3d-illustration_839035-102292.jpg',
          details: 'Jane is an expert in software development and has a passion for innovative technology solutions.'
        },
        { 
          id: 3, 
          name: 'Alice Johnson', 
          position: 'CFO', 
          image: 'https://img.freepik.com/premium-photo/3d-character-business-woman_935410-589.jpg',
          details: 'Alice has a strong background in finance and has helped companies raise millions in funding.'
        },
        { 
          id: 4, 
          name: 'Barry Diaz', 
          position: 'CMO', 
          image: 'https://img.freepik.com/premium-photo/cartoon-character-with-contract-hands-3d-illustration_839035-120672.jpg',
          details: 'Barry is a marketing guru with a knack for creating compelling brand stories.'
        },
        { 
          id: 5, 
          name: 'John Fritz', 
          position: 'DEVELOPER', 
          image: 'https://img.freepik.com/premium-photo/cartoon-boy-with-brown-hair-blue-jacket-looking-up-generative-ai_900833-38976.jpg?w=360',
          details: 'Fritz has a strong experience in web programming'
        }
      ],
      activeSection: 'home',
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      currentIndex: 0,
      sponsorsPerPage: 3,
      intervalId: null,
      isHovering: false,
      countIdeasSpunOut: 0,
      countIdeasKilled: 0,
      intervalIdSpunOut: null,
      intervalIdKilled: null,
      maxSpunOut: 36,
      maxKilled: 412,
      duration: 2000, 
      isAtBottom: false,
      lastScrollPosition: 0
        
      };
    },
    computed: {
      floatingX() {
        return this.cursorX - 66; // Adjusts the X position to center the text above the cursor
      },
      floatingY() {
        return this.cursorY - 56; // Adjusts the Y position to place the text above the cursor
      },
      cardHeight() {
        return this.isMobile ? '45vh' : '86vh';
      },
      cardHeightsponsort() {
        return this.isMobile ? '50vh' : '55vh';
      },
      floatingText() {
        return this.hoveredCard ? this.hoveredCard.text : '';
      },
      displayedSponsors() {
        return this.sponsors.slice(this.currentIndex, this.currentIndex + this.sponsorsPerPage);
      },
    },
    methods: {
      handleMouseMove(event, member) {
      console.log(member);
      this.cursorX = event.clientX; // Use the mouse's X position directly
      this.cursorY = event.clientY; // Use the mouse's Y position directly
      this.hoveredMember = member;
      this.showFloatingText = true;
      },
      handleMouseLeave() {
          this.hoveredMember = null;
          this.showFloatingText = false;
      },
      handleSponsorClick (sponsor){
        console.log(sponsor);
      },
      setCustomCursor(type) {
        const cursorUrl = type === 'dark'
          ? 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="gold"/></svg>'
          : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="white"/></svg>';
        document.body.style.cursor = `url('${cursorUrl}') 10 10, auto`;
      },
      handleMenuItemClick(item) {
        if (item.link.startsWith('#')) {
          const section = document.querySelector(item.link);
          if (section) {
            if (item.link === '#contact') {
            // Scroll to bottom of page
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth'
            });
          } else {
            // For other sections, use existing behavior
            section.scrollIntoView({ behavior: 'smooth' });
          }
          
              section.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          console.log('Navigating to:', item.link);
          this.drawer = false;
        }
      },
      checkMobile() {
        this.isMobile = window.innerWidth < 768;
        this.countIdeasSpunOut = 0;
        this.countIdeasKilled = 0;
        this.startCounting();
      },
      handleCardMousemove(e, card) {
        this.hoveredCard = card;
        this.cursorX = e.clientX;
        this.cursorY = e.clientY;
        this.showFloatingText = true;
      },
      handleCardMouseleave() {
        this.hoveredCard = null;
        this.showFloatingText = false;
      },
      createIntersectionObserver() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                console.log(entry.isIntersecting, entry.target.id); // Debugging line
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    this.activeSection = sectionId; 
                    if (sectionId === 'results') {
                        this.countIdeasSpunOut = 0;
                        this.countIdeasKilled = 0;
                        this.startCounting();
                    }
                }
            });
        },
        {
            threshold: 0.5, 
        }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
},
      submitForm() {
        if (this.$refs.form.validate()) {
          // Handle form submission
          console.log('Form submitted:', {
            name: this.name,
            email: this.email,
            message: this.message
          });
          
          // Reset form
          this.$refs.form.reset();
        }
      },
      loadLottieAnimation() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer, 
          renderer: 'svg',
          loop: true, 
          autoplay: true, 
          path: '/lotte/Animation2.json' 
        });
      },
      loadLottieAnimation1() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer1, 
          renderer: 'svg',
          loop: true, 
          autoplay: true, 
          path: '/lotte/Animation8.json' 
        });
      },
      loadLottieAnimation2() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer2, 
          renderer: 'svg',
          loop: true, 
          autoplay: true, 
          path: '/lotte/Animation7.json' 
        });
      },
      loadLottieAnimation3() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer3, 
          renderer: 'svg',
          loop: true, 
          autoplay: true, 
          path: '/lotte/Animation10.json' 
        });
      },
      loadLottieAnimation4() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer4, 
          renderer: 'svg',
          loop: true, 
          autoplay: true, 
          path: '/lotte/Animation13.json' 
        });
      },
      startDrag(event) {
        this.isDragging = true;
        this.startX = event.pageX - this.$refs.teamMembersContainer.offsetLeft;
        this.scrollLeft = this.$refs.teamMembersContainer.scrollLeft;
        this.$refs.teamMembersContainer.classList.add('dragging');
        event.preventDefault();
      },
      
      stopDrag() {
        this.isDragging = false;
        this.$refs.teamMembersContainer.classList.remove('dragging');
      },
      
      drag(event) {
        if (!this.isDragging) return;
        
        event.preventDefault();
        const x = event.pageX - this.$refs.teamMembersContainer.offsetLeft;
        const walk = (x - this.startX) * 2; 
        
        requestAnimationFrame(() => {
          this.$refs.teamMembersContainer.scrollLeft = this.scrollLeft - walk;
        });
      },
        startCounting() {
        const incrementSpunOut = Math.ceil(this.maxSpunOut / (this.duration / 600)); // Calculate increment for spun out
        const incrementKilled = Math.ceil(this.maxKilled / (this.duration / 600)); // Calculate increment for killed

        this.intervalIdSpunOut = setInterval(() => {
          if (this.countIdeasSpunOut < this.maxSpunOut) {
            this.countIdeasSpunOut += incrementSpunOut;
          } else {
            clearInterval(this.intervalIdSpunOut);
            this.countIdeasSpunOut = this.maxSpunOut; // Ensure it ends exactly at max
          }
        }, 100);

        this.intervalIdKilled = setInterval(() => {
          if (this.countIdeasKilled < this.maxKilled) {
            this.countIdeasKilled += incrementKilled;
          } else {
            clearInterval(this.intervalIdKilled);
            this.countIdeasKilled = this.maxKilled; // Ensure it ends exactly at max
          }
        }, 100);
      },
      handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Check if we're at the bottom (within 1px)
      if (Math.abs((scrollTop + windowHeight) - documentHeight) < 1) {
        this.isAtBottom = true;
        this.activeSection = 'contact'
      } else {
        this.isAtBottom = false;
      }
      
      // Store last scroll position for scroll direction detection
      this.lastScrollPosition = scrollTop;
    }
    },
    mounted() {
      
      const resizeObserver = new ResizeObserver(entries => {
        const isMobile = entries[0].contentRect.width < 768;
        this.setCustomCursor(isMobile ? 'white' : 'dark');
      });
      window.addEventListener('resize', this.checkMobile);
      resizeObserver.observe(document.body);
      this.createIntersectionObserver();
      this.setCustomCursor('dark');
      this.checkMobile();
      this.loadLottieAnimation();
      this.loadLottieAnimation1();
      this.loadLottieAnimation2();
      this.loadLottieAnimation3();
      this.loadLottieAnimation4();
      window.addEventListener('scroll', this.handleScroll);
      this.checkMobile()
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkMobile);
      resizeObserver.disconnect();
      this.stopAutoSwitch();
      clearInterval(this.intervalIdSpunOut);
      clearInterval(this.intervalIdKilled);
      window.removeEventListener('scroll', this.handleScroll);
    },
    
  };
  </script>
  <style lang="scss">
  @import './assets/fonts/fonts.css';
  body {
    font-family: 'Poppins-SemiBold', Arial, sans-serif; /* Fallback to Arial and sans-serif */
  }
  </style>

  <style scoped>
  
  /* Base Styles */
  .hero-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  /* Title Animations */
  .main-title {
    font-size: 8rem;
    margin: 0;
  }

  .word {
    display: inline-block;
    opacity: 0;
    animation: fadeInRotate 0.8s ease-out forwards;
    animation-delay: calc(var(--i) * 1s);
  }

  @keyframes fadeInRotate {
    0% {
      opacity: 0;
      transform: rotateY(90deg);
    }
    100% {
      opacity: 1;
      transform: rotateY(0);
    }
  }

  /* Optional: Add hover effect */
  /* .word:hover {
    animation: pulse 0.5s ease-in-out infinite;
  } */

  @keyframes pulse {
    0% { transform: rotateY(0) scale(1); }
    50% { transform: rotateY(360deg) scale(1.05); }
    100% { transform: rotateY(360deg) scale(1); }
  }

  .main-title1 {
    font-size: 2rem;
    margin: 0;
    opacity: 0;
    animation: fadeInDown 1s forwards;
  }

  .word {
    display: inline-block;
    opacity: 0;
    animation: fadeInRotate 0.8s ease-out forwards;
    animation-delay: calc(var(--i) * 0.2s);
  }

  /* Toolbar Styles */
  .tBar {
    height: 80px !important;
    z-index: 100;
    width: 100%;
    padding-top: 0.6em;
    inset: 0% 0% auto;
    transition: all 0.3s ease;
    position: fixed;
  }

  /* Card Hover Effects */
  .card-content {
    transition: transform 0.3s ease-in-out;
  }

  .card-content.hover-active {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(255, 105, 180, 0.3);
  }

  /* Mobile Navigation */
  .mobile-nav {
    background-color: #FFD700 !important;
  }

  .mobile-nav .v-list-item {
    color:black !important

  }

  .mobile-nav .v-list-item:hover {
    background-color: rgba(255, 105, 180, 0.1);
  }

  /* Gallery Styles */
  .gallery-container {
    padding: 0 !important;
    max-width: none !important;
  }

  .gallery-image {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }

  .gallery-image:hover {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }

  /* Floating Text Styles */
  .floating-text {
    position: fixed;
    pointer-events: none;
    z-index: 999;
    padding: 8px 16px;
    color:  #FFD700  ;
    font-size: 20px;
    transform-origin: center bottom;
    animation: fadeIn 0.2s ease-out;
    display: inline-flex;
    gap: 2px;
    border-radius: 4px; /* Optional: Add some border radius */
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInRotate {
    from {
      opacity: 0;
      transform: rotateY(90deg);
    }
    to {
      opacity: 1;
      transform: rotateY(0);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .main-title {
      font-size: 4rem;
    }

    .menu-button {
      margin: 0 5px;
      transition: transform 0.3s ease;
    }

    .menu-button:hover {
      transform: scale(1.05);
    }

    .v-navigation-drawer {
      width: 80%; /* Adjust width for mobile */
    }

    .v-app-bar {
      font-size: 1.2rem; /* Adjust font size for mobile */
    }
  }

  @media (min-width: 768px) {
    .menu-button {
      margin: 0 15px;
      transition: all 0.3s ease;
    }

    .menu-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px  #FFD700;
    }
  }


  .image-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .card-sponsor {
      width: 90%;
      margin-bottom: 32px;
    }
    
    .card-sponsor:hover {
      transform: scale(1.05);
    }
  }
  .section {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Add smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }
  .section {
    /* Faster animation */
    transition: all 0.5s ease-out;
  }

  .section.parallax {
    transform: translateZ(0);
    background-size: cover !important;
  }

  .section.fade-in {
    opacity: 0;
    transform: none;
    transition: opacity 6s ease-in;
  }


  /* SECOND SECTION */
  .services-container {
    display: flex; /* Use flexbox to center the content */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    height: 100%; /* Full height to fill the viewport */
    padding: 2% !important; 
    font-size: 24px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr)); /* Ensures columns have a minimum width */
    gap: 20px; /* Row gap */
    column-gap: 150px; /* Adjust the space between columns */
    justify-items: start; /* Left-align the items inside the grid */
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr; /* Single column for small screens */
    }
  }

  /* 4TH SECTION */
  .svg-animation {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-animation {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Right Column - PSL Typography */
  .ideation-text {
    color: white;
    text-align: left;
    max-width: 600px;
    display: block;
    line-height: 1.15;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  .section-description {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
    font-size: 23px;
    font-weight: 400;
    line-height: 1.625;
  }

  @media (max-width: 768px) {
    .card-hover:hover::before {
      opacity: 0.7;
    }
    .enhanced-button:hover {
      transform: scale(1.05);
    }
  }
  .card-hover {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  @keyframes fadeIn {
      from {
          opacity: 0;
          transform: translateY(10px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }
  .color-slate {
      color: var(--darkreader-text--slate, var(--darkreader-text-000000, #ffffff));
  }
  @media (max-width: 768px) {
    .section {
      height: 200vh; /* Set height to 200vh for mobile */
    }
  }

  .team-members-container {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 20px 0;
    position: relative;
  }

  .team-members-container::-webkit-scrollbar {
    display: none;
  }

  .team-members-row {
    display: inline-flex;
    padding: 0 40px; 
  }

  .team-image {
    transition: transform 0.3s ease;
    margin: 0 10px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .fullscreen-drawer {
    width: 150vw; /* Full width */
    height: 100vh; /* Full height */
    background-color: #212021; /* Match the background color */
    z-index: 2000; /* Ensure it is above other elements */
  }
  .fullscreen-drawer {
    transition: transform 0.3s ease;
  }

  .visible-content {
    display: flex;
    flex-direction: column;
  }

  .active-line {
    position: relative;
  }

  .active-line::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px; /* Adjust as needed */
    height: 2px; /* Line thickness */
    background-color: #FFD700; /* Line color */
    transition: all 0.3s ease; /* Smooth transition */
  }

  .large-number {
    font-size: 180px !important;
    font-weight: bold !important;
    }

  @media only screen and (min-width: 480px) {
      footer {
          z-index: 4;
      }
  }
  footer {
      position: relative;
  }
  
  footer {
      display: block;
      unicode-bidi: isolate;
  }
  style attribute {
      --vh-resize: 12.66px;
      --vh: 12.66px;
  }
  /* Team Section */
  .team-section {
      position: relative; /* Ensure it can be layered above the footer */
    }
  #team {
      margin-bottom: 1000px; 
  }
  .my-custom-row {
      min-height: 95px !important; /* Adjust as needed */
  }
 /* Currently Working In Section */
.v-toolbar {
    margin-bottom: 20px; /* Add some space below the toolbar */
}

.marquee-container {
    overflow: hidden;
    position: relative;
    height: 48px; /* Adjust based on your design */
}

.contact__marquee__ticker__inner {
    display: flex;
    animation: marquee 15s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

/* Responsive Styles for Mobile */
@media (max-width: 768px) {
    .marquee-container {
        height: 40px; /* Adjust height for mobile */
    }

    .contact__marquee__ticker__inner h3 {
        font-size: 1.2rem; /* Adjust font size for mobile */
    }
} 
@media (max-width: 768px) {
    .contact__marquee__ticker__inner h5 {
        font-size: 1rem; /* Adjust font size for mobile */
        white-space: nowrap; /* Prevent line breaks */
    }
}
@media (max-width: 768px) {
    #results {
        display: block; /* Ensure it is visible */
        height: auto; /* Adjust height if necessary */
    }
}#app {
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}

footer {
  margin-top: auto;
  position: relative;
}

.marquee-container {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 48px;
  background-color: #b7e3b6;
  z-index: 9;
}

.contact__marquee__ticker__inner {
  display: flex;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
  </style>