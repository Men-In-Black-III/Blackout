class ApplicationController < ActionController::Base
    def after_sign_out_path_for(resource_or_scope)
        request.referrer
    end
    skip_before_action :verify_authenticity_token
end
