use worker::{event, Context, Env, HttpRequest, HttpResponse};

#[event(fetch)]
pub async fn fetch(_req: HttpRequest, _env: Env, _ctx: Context) -> std::result::Result<HttpResponse, poem::Error> {
    // let app = Route::new();
    todo!()
    // Ok(app.call(req.into()).await?.into())
}

