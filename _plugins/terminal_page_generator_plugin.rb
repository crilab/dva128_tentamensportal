module TerminalPageGeneratorPlugin

    class TerminalPageGenerator < Jekyll::Generator
        def generate(site)
            site.collections["uppgifter"].docs.each do |doc|
                site.pages << TerminalPage.new(site, doc.url[..-11]) if doc.url.end_with?("/index.html")
            end
        end
    end

    class TerminalPage < Jekyll::Page
        def initialize(site, url)
            filename = "terminal.html"
            super(site, site.source, "_layouts", filename)
            @url = url + filename
        end
    end

end
