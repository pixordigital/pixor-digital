import { motion, AnimatePresence } from 'motion/react';
import { Bot, Cpu, LineChart, Mail, MapPin, MessageSquare, Phone, ShieldCheck, Zap, X, ArrowRight, Menu } from 'lucide-react';
import { useState, FormEvent } from 'react';

// Components
const Navbar = ({ onOpenPrivacy }: { onOpenPrivacy: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070a]/60 backdrop-blur-lg border-b border-white/5 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight uppercase text-white">
              Pixor <span className="text-cyan-400">Digital</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView()}
              className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              Falar com Especialista
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-[#0a0d14]/95 backdrop-blur-xl border-b border-white/5 p-4 flex flex-col space-y-4"
          >
            <a href="#inicio" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium p-2 transition-colors">Início</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium p-2 transition-colors">Serviços</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium p-2 transition-colors">Sobre</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium p-2 transition-colors">Contato</a>
            <button onClick={onOpenPrivacy} className="text-left text-slate-300 hover:text-cyan-400 font-medium p-2 transition-colors">Privacidade</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            O Futuro da Automação Corporativa
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight mb-8">
            Impulsione seu negócio com <br className="hidden md:block"/>
            <span className="text-white italic">
              Inteligência Artificial.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
            Criamos ecossistemas de automação inteligentes que reduzem custos operacionais em até 60% e escalam sua produtividade sem limites.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('servicos')?.scrollIntoView()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-bold rounded-full border border-cyan-400/20 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2"
            >
              Conhecer Soluções
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView()}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white backdrop-blur-md hover:bg-white/10 font-medium flex items-center justify-center gap-2 transition-all"
            >
              Falar com Consultor
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      title: "Chatbots de Atendimento IA",
      description: "Agentes virtuais que conversam de forma humanizada, resolvem problemas 24/7 e qualificam leads automaticamente no WhatsApp e Site."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "Automação de Processos",
      description: "Elimine tarefas manuais repetitivas. Conectamos seus sistemas (CRMs, ERPs) para trabalharem em sincronia de forma autônoma."
    },
    {
      icon: <LineChart className="w-6 h-6 text-blue-400" />,
      title: "Análise de Dados Inteligente",
      description: "Transformamos dados brutos em insights claríssimos. Previsão de vendas, análise de comportamento de clientes e relatórios automáticos."
    },
    {
      icon: <Bot className="w-6 h-6 text-blue-400" />,
      title: "Agentes Especializados",
      description: "Avaliadores de contratos, construtores de pautas, assistentes de código e várias outras IAs treinadas especificamente para sua empresa."
    }
  ];

  return (
    <section id="servicos" className="relative z-10 py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6 tracking-tight">Soluções que escalam seus <span className="text-cyan-400 italic">resultados</span></h2>
          <p className="text-slate-400 text-lg leading-relaxed">Independente do seu nicho de mercado, a Inteligência Artificial pode otimizar a forma como sua empresa opera hoje.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
             const bgColors = ["bg-cyan-500/20", "bg-blue-500/20", "bg-purple-500/20", "bg-cyan-500/20"];
             const borderColors = ["hover:border-cyan-500/30", "hover:border-blue-500/30", "hover:border-purple-500/30", "hover:border-cyan-500/30"];
             const iconColors = ["text-cyan-400", "text-blue-400", "text-purple-400", "text-cyan-400"];
             
             const coloredIcon = {
               ...service.icon, 
               props: { ...service.icon.props, className: `w-6 h-6 ${iconColors[index]}` }
             };

             return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl ${borderColors[index]} transition-all group`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${bgColors[index]}`}>
                {coloredIcon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-6">
              Sobre a <span className="text-cyan-400 italic">Pixor Digital</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Somos uma agência de tecnologia focada puramente na interseção entre negócios escaláveis e Inteligência Artificial. Nossa missão é democratizar o acesso à automação de alto nível.
              </p>
              <p>
                Ao contrário de agências tradicionais que entregam apenas software ou marketing, a Pixor Digital analisa o cerne operacional da sua empresa para injetar inteligência onde realmente traz retorno financeiro imediato.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all">
                <div className="text-3xl font-display font-bold text-white mb-2">100%</div>
                <div className="text-sm text-slate-400">Focado em IA e Automação</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all">
                <div className="text-3xl font-display font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-slate-400">Operação ininterrupta</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600 to-purple-600 rounded-[40px] blur-3xl opacity-20 hidden lg:block" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] aspect-square flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mb-8">
                <ShieldCheck className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Empresa Verificada</h3>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Atuamos em conformidade com as melhores práticas do mercado, respeitando a LGPD e garantindo a segurança dos dados processados nas nossas integrações e APIs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Fake submit
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-6">
              Pronto para evoluir sua empresa?
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Preencha o formulário para agendar um diagnóstico gratuito. Nossa equipe mapeará onde a IA pode gerar mais impacto no seu negócio.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">E-mail Comercial</div>
                  <div className="font-medium text-white">pixordigital@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">WhatsApp / Telefone</div>
                  <div className="font-medium text-white">+55 (83) 99984-3634</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">Escritório Central</div>
                  <div className="font-medium text-white">Rua Leonardo Cerqueira Castro, 143 - João Pessoa, PB</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-400">Nossa equipe entrará em contato em breve.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nome Completo</label>
                  <input required type="text" id="name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="João Silva" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-slate-400 mb-1">Empresa</label>
                    <input required type="text" id="empresa" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Sua Empresa" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">Telefone/WhatsApp</label>
                    <input required type="tel" id="phone" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="+55 (11) 99999-9999" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">E-mail Corporativo</label>
                  <input required type="email" id="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="joao@empresa.com.br" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Como podemos ajudar?</label>
                  <textarea required id="message" rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Conte-nos um pouco sobre seu projeto..."></textarea>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <input required type="checkbox" id="privacy" className="mt-1 rounded border-white/20 bg-[#0a0d14] text-cyan-500 focus:ring-cyan-500" />
                  <label htmlFor="privacy" className="text-xs text-slate-500 leading-relaxed">
                    Concordo com os Termos de Uso e a Política de Privacidade. Compreendo que a Pixor Digital utilizará meus dados para entrar em contato referente às soluções de IA.
                  </label>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="w-full mt-6 px-8 py-4 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold hover:shadow-lg hover:shadow-cyan-500/20 disabled:opacity-50 text-white flex items-center justify-center gap-2 transition-all"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Solicitar Diagnóstico'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenPrivacy }: { onOpenPrivacy: () => void }) => {
  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight uppercase text-white">
                Pixor <span className="text-cyan-400">Digital</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              Automatizando operações e escalando resultados de empresas através de Inteligência Artificial generativa e soluções personalizadas.
            </p>
            <div className="text-slate-500 text-xs space-y-1 uppercase tracking-widest font-medium">
              <p>Pixor Digital</p>
              <p>CNPJ: 37.342.977/0001-05</p>
              <p>Rua Leonardo Cerqueira Castro, 143 - João Pessoa, PB</p>
              <p>E-mail: pixordigital@gmail.com</p>
              <p>WhatsApp / Telefone: +55 (83) 99984-3634</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wider uppercase text-sm">Links Úteis</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Página Inicial</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wider uppercase text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#privacidade" onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Política de Privacidade</a></li>
              <li><a href="#termos" onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs tracking-widest uppercase font-medium">
            © {new Date().getFullYear()} Pixor Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const PrivacyModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#05070a]/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0a0d14] border border-white/10 rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white tracking-tight">Política de Privacidade & Termos</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="prose prose-invert prose-sm text-slate-400">
          <h3 className="text-white font-medium">1. Informações Gerais e Termos de Serviço</h3>
          <p>
            A presente Política de Privacidade e Proteção de Dados, em conjunto com nossos Termos de Serviço, tem por finalidade demonstrar o compromisso da <strong>Pixor Digital</strong> (CNPJ: 37.342.977/0001-05) com a privacidade e proteção dos dados pessoais de seus usuários, além de estabelecer as regras de uso do nosso site e serviços. Ao utilizar nosso site, você concorda com estes termos.
          </p>
          <h3 className="text-white font-medium mt-4">2. Coleta de Dados</h3>
          <p>
            Coletamos informações através do formulário de contato (Nome, E-mail, Empresa, Telefone) com o objetivo exclusivo de comunicação comercial, agendamento de diagnóstico e eventuais envios de propostas relativas aos nossos serviços de automação de IA.
          </p>
          <h3 className="text-white font-medium mt-4">3. Compartilhamento</h3>
          <p>
            A Pixor Digital não comercializa, aluga ou cede dados pessoais para terceiros não envolvidos nos processos operacionais da empresa. As informações fornecidas podem ser processadas e armazenadas utilizando infraestrutura em nuvem de prestadores de serviço devidamente regulamentados.
          </p>
          <h3 className="text-white font-medium mt-4">4. Direitos do Usuário (LGPD)</h3>
          <p>
            Respeitando a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o usuário pode, a qualquer tempo, solicitar a exibição, retificação ou exclusão de seus dados pessoais através do canal de atendimento: <strong>pixordigital@gmail.com</strong>.
          </p>
          <h3 className="text-white font-medium mt-4">5. Contato e Conformidade com a Meta</h3>
          <p>
            Esta política está disposta de forma clara para cumprimento com as Políticas Comerciais e de Anúncios da Meta Platforms, Inc. A Pixor Digital não solicita dados financeiros ou senhas por meio deste site. Para qualquer dúvida sobre este documento ou nossos Termos de Serviço, entre em contato em nosso endereço físico: <strong>Rua Leonardo Cerqueira Castro, 143 - João Pessoa, PB</strong> ou pelo telefone <strong>(83) 99984-3634</strong>.
          </p>
        </div>
        <div className="mt-8 flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            Ciente e Fechar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 font-sans relative overflow-hidden flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Mesh Gradients */}
      <div className="fixed top-[-200px] left-[-100px] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

      <Navbar onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      
      <AnimatePresence>
        {isPrivacyOpen && (
          <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
