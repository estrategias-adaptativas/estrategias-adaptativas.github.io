# This Makefile provides sensible defaults for projects
# based on Pandoc and Jekyll, such as:
# - Dockerized runs of Pandoc and Jekyll with separate
#   variables for version numbers = easy update!
# - Lean CSL checkouts without committing to the repo
# - Website built on the gh-pages branch
# - Bibliography path compatible with Jekyll-Scholar

# Global variables and setup {{{1
# ================
VPATH = _lib
vpath %.bib _bibliography
vpath %.csl .:_csl
vpath %.yaml .:_spec
vpath default.% .:_lib
vpath reference.% .:_lib

DEFAULTS := defaults.yaml references.bib
JEKYLL-VERSION := 4.2.0
PANDOC-VERSION := 2.14.1
JEKYLL/PANDOC := docker run --rm -v "`pwd`:/srv/jekyll" \
	-h "0.0.0.0:127.0.0.1" -p "4000:4000" \
	palazzo/jekyll-tufte:$(JEKYLL-VERSION)-$(PANDOC-VERSION)
PANDOC/CROSSREF := docker run --rm -v "`pwd`:/data" \
	-u "`id -u`:`id -g`" pandoc/crossref:$(PANDOC-VERSION)
PANDOC/LATEX := docker run --rm -v "`pwd`:/data" \
	-u "`id -u`:`id -g`" palazzo/pandoc-ebgaramond:$(PANDOC-VERSION)

# Targets and recipes {{{1
# ===================
_book/%.pdf : %.md references.bib latex.yaml
	$(PANDOC/LATEX) -d _spec/defaults.yaml -o $@ $<
	@echo "$< > $@"

_book/%.docx : %.md $(DEFAULTS) reference.docx
	$(PANDOC/CROSSREF) -d _spec/defaults.yaml -o $@ $<
	@echo "$< > $@"

.PHONY : _site
_site :
	@$(JEKYLL/PANDOC) /bin/bash -c \
	"chmod 777 /srv/jekyll && jekyll build"

# Install and cleanup {{{1
# ===================
.PHONY : serve
serve :
	@$(JEKYLL/PANDOC) jekyll serve

.PHONY : clean
clean :
	-rm -rf _book/* _site

_book :
	@mkdir -p _book

# vim: set foldmethod=marker shiftwidth=2 tabstop=2 :
